import { useState, useContext, createContext, ReactNode, ReactElement } from 'react'

import {
  SetupProps,
  empty_setup,
  show_keys,
  SetupKeysToShowProps,
  empty_differences,
  DifferencesProps,
  DifferencesListProps,
} from './setup'

export interface SetupCompleteProps {
  name: string
  content: SetupProps[]
}

export interface SetupKeysToShowValuesProps {
  key: string
  values: string[]
}

interface SetupContextProps {
  setups: SetupCompleteProps[]
  updateSetups: (new_setups: FileList) => void
  setupKeysToShow: SetupKeysToShowProps[]
  differences: DifferencesProps
}

interface SetupCompleteRawProps {
  name: string
  raw_content: string
}

interface SetupCompleteSplitProps {
  name: string
  split_content: string[]
}

const SetupContext = createContext<Partial<SetupContextProps>>({})

export const useSetup = (): Partial<SetupContextProps> => useContext(SetupContext)

const cleanSlashes = (line: string): string => {
  let new_line = line.trim()

  if (new_line.startsWith('//')) new_line = new_line.substring(2, new_line.length)

  return new_line
}

const splitByEquals = (line: string): string[] => {
  let new_line = line

  if (new_line.includes('//')) new_line = new_line.replace('//', '=')
  const new_line_array = new_line.split('=')

  return new_line_array
}

const getLineTitle = (current_title: string, line: string): string => {
  const titles_list = [
    'FRONTRIGHT',
    'FRONTLEFT',
    'REARRIGHT',
    'REARLEFT',
    'LEFTFENDER',
    'RIGHTFENDER',
  ]

  if (line.startsWith('[')) {
    const initial_title = line.substring(1, line.length - 2)

    const title = titles_list.includes(initial_title) ? initial_title : ''
    return title
  }

  return current_title
}

const cleanLine = (FRFLRRRL: string, line: string): SetupProps => {
  let r = line

  r = cleanSlashes(r)

  const new_line_array = splitByEquals(r)

  if (
    empty_setup.filter(
      (item: SetupProps) =>
        item.key === new_line_array[0] || item.key === new_line_array[0] + FRFLRRRL,
    ).length > 0
  ) {
    const current_tab = empty_setup.find(
      (item: SetupProps) =>
        item.key === new_line_array[0] || item.key === new_line_array[0] + FRFLRRRL,
    )

    const tab = current_tab?.tab || ''
    const key = new_line_array[0] + FRFLRRRL
    const name = current_tab?.name || ''
    const value = new_line_array[new_line_array.length - 1]

    const res: SetupProps = { tab, key, name, value }

    return res
  }

  return { tab: '', key: '', name: '', value: '' } as SetupProps
}

const processSetupsContent = (setups: SetupCompleteSplitProps[]): SetupCompleteProps[] => {
  // FRFLRRRL is a variable to save the value
  // when we are in a FRONTRIGHT, FRONTLEFT, REARRIGHT or REARLEFT
  // group, so we can add it to the key to differentiate each other
  let FRFLRRRL = ''

  const setups_with_processed_content: SetupCompleteProps[] = setups.map(
    (setup: SetupCompleteSplitProps): SetupCompleteProps => {
      const processed_content: SetupProps[] = setup.split_content
        .map((line: string) => {
          FRFLRRRL = getLineTitle(FRFLRRRL, line)
          return cleanLine(FRFLRRRL, line)
        })
        .filter((line) => line.tab !== '' && line.key !== '')
        .filter((line) => !line.value.startsWith('"Notes'))
      const setup_with_processed_content: SetupCompleteProps = {
        name: setup.name,
        content: processed_content,
      }
      return setup_with_processed_content
    },
  )

  return setups_with_processed_content
}

const readFiles = async (files_list: FileList): Promise<SetupCompleteRawProps[]> => {
  const files = Array.from(files_list).map(async (file) => {
    const reader = new FileReader()
    const raw_content_promise = new Promise((resolve, reject) => {
      reader.onload = (): void => resolve(reader.result)
      reader.onerror = (): void => reject(reader)
      reader.readAsText(file)
    })
    const raw_content = (await raw_content_promise) as string

    const setup_raw: SetupCompleteRawProps = {
      name: file.name,
      raw_content: raw_content,
    }
    return setup_raw
  })

  return (await Promise.all(files)) as SetupCompleteRawProps[]
}

const removeWeirdChars = (string: string): string =>
  Array.from(string)
    .map((char: string) => (char.charCodeAt(0) <= 127 ? char : '\n\n'))
    .join('')

const joinNotesInSingleLine = (content: string[]): string[] => {
  const notes_line_start = 'Notes='

  // identify lines that contain notes
  const lines_with_notes: string[] = content.filter((line: string): boolean =>
    line.startsWith(notes_line_start),
  )

  // Clear notes lines without title except the first one
  const lines_with_notes_title_fix = lines_with_notes.map((line: string, key: number): string => {
    if (key === 0) {
      const first_line_fix_quotes = line.slice(0, 6).concat(line.slice(7, line.length - 2))
      return first_line_fix_quotes
    }

    const notes_title_replaced = line.replace(notes_line_start + '"', '')
    const notes_without_double_quotes = notes_title_replaced.substr(
      0,
      notes_title_replaced.length - 2,
    )
    return notes_without_double_quotes
  })

  // Join those lines into 1
  const notes_in_one_line = lines_with_notes_title_fix.reduce(
    (prev_value: string, current_value: string): string => `${prev_value}${current_value}`,
  )

  // Remove weird characters from the notes line
  const notes_without_weird_characters = removeWeirdChars(notes_in_one_line)

  // pop all lines that contain notes
  const content_without_notes = content.filter((line: string) => !line.startsWith(notes_line_start))

  // add new line with all notes together
  const content_with_notes_joined = [...content_without_notes, notes_without_weird_characters]

  return content_with_notes_joined
}

const separateContentIntoLines = (raw_content: string): string[] => {
  const content_split_lines = raw_content.split('\n')

  const content_split_lines_fixed_notes = joinNotesInSingleLine(content_split_lines)

  return content_split_lines_fixed_notes
}

const splitSetupsContent = (files: SetupCompleteRawProps[]): SetupCompleteSplitProps[] =>
  Array.prototype.map.call(
    files,
    (file: SetupCompleteRawProps): SetupCompleteSplitProps => ({
      name: file.name,
      split_content: separateContentIntoLines(file.raw_content),
    }),
  ) as SetupCompleteSplitProps[]

interface SetupProviderProps {
  children: ReactNode
}

export const SetupProvider = ({ children }: SetupProviderProps): ReactElement => {
  const [setups, setSetups] = useState<SetupCompleteProps[]>([])
  const [setupKeysToShow, setSetupKeysToShow] = useState<SetupKeysToShowProps[]>(show_keys)
  const [differences, setDifferences] = useState<DifferencesProps>(empty_differences)

  const createSetups = async (new_setups: SetupCompleteProps[]): Promise<void> => {
    // TODO
    // In the future this might be
    // setSetups((currentSetups: SetupCompleteProps[]) => {
    //   return [...new_setups]
    // })
    // For now we just erase everything when loading more setups
    setSetups([...new_setups])
  }

  const compareSetups = (
    setups: SetupCompleteProps[],
    setup_keys_to_show: SetupKeysToShowProps[],
  ): SetupKeysToShowProps[] => {
    const setups_keys: SetupKeysToShowValuesProps[] = setup_keys_to_show.map(
      (setup_key_to_show: SetupKeysToShowProps): SetupKeysToShowValuesProps => {
        const setups_key_to_show_values: SetupKeysToShowValuesProps['values'] = setups.map(
          (setup: SetupCompleteProps) => {
            const r = setup.content.find(
              (content: SetupProps) => content.key === setup_key_to_show.key,
            )?.value
            return r
          },
        ) as string[]

        return { key: setup_key_to_show.key, values: setups_key_to_show_values }
      },
    )

    const new_setup_keys_to_show: SetupKeysToShowProps[] = setup_keys_to_show.map(
      (line: SetupKeysToShowProps) => {
        const values_to_compare: SetupKeysToShowValuesProps['values'] = setups_keys.find(
          (line2: SetupKeysToShowValuesProps) => line.key === line2.key,
        )?.values as string[]

        let show = !(values_to_compare.length > 1)

        if (!show) {
          for (let i = 1; i < values_to_compare.length; i++) {
            show = values_to_compare[i] !== values_to_compare[i - 1]
            if (show) break
          }
        }

        const r = { ...line, show: show }

        return r
      },
    )

    setSetupKeysToShow(new_setup_keys_to_show)

    return new_setup_keys_to_show
  }

  const updateNumberOfDifferences = (
    setup_keys_to_show: SetupKeysToShowProps[],
    empty_setup: SetupProps[],
    empty_differences: DifferencesProps,
  ): void => {
    let new_differences = { ...empty_differences }

    empty_setup.forEach((setup_content_item: SetupProps) => {
      const current_setup_key_to_show = setup_keys_to_show.find(
        (item: SetupKeysToShowProps) => item.key === setup_content_item.key && item.show,
      )

      // If undefined, the items must not be shown
      if (typeof current_setup_key_to_show === 'undefined') return

      const related_tab: string = setup_content_item.tab

      // add +1 to new_differences total value
      new_differences.total++

      // add +1 to new_differences in the related tab
      new_differences = {
        ...new_differences,
        list: new_differences.list.map((list_item: DifferencesListProps) => {
          if (related_tab === list_item.key) return { ...list_item, value: list_item.value + 1 }
          return { ...list_item }
        }),
      }
    })

    setDifferences(new_differences)
  }

  const updateSetups = async (new_files: FileList): Promise<void> => {
    // Read the files
    const setups_raw_content: SetupCompleteRawProps[] = await readFiles(new_files)

    // Split setups content into lines
    const setups_split_content: SetupCompleteSplitProps[] = splitSetupsContent(setups_raw_content)

    // Process the setups content into an array of Setups.content objects
    const setups_to_add: SetupCompleteProps[] = processSetupsContent(setups_split_content)

    // Add the new setups to setups
    createSetups(setups_to_add)

    // Set the lines that have to be shown after comparison
    const setup_keys_to_show: SetupKeysToShowProps[] = compareSetups(setups_to_add, setupKeysToShow)

    // Update number of differences
    updateNumberOfDifferences(setup_keys_to_show, empty_setup, empty_differences)
  }

  return (
    <SetupContext.Provider
      value={{
        setups: setups,
        updateSetups: updateSetups,
        setupKeysToShow: setupKeysToShow,
        differences: differences,
      }}
    >
      {children}
    </SetupContext.Provider>
  )
}
