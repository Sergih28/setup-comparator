import { useState, useContext, createContext, ReactNode, ReactElement } from 'react'

import { SetupProps, empty_setup } from './setup'

export interface SetupCompleteProps {
  name: string
  content: SetupProps[]
}

interface SetupContextProps {
  setups: SetupCompleteProps[]
  updateSetups: (new_setups: FileList) => void
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
  const titles_list = ['FRONTRIGHT', 'FRONTLEFT', 'REARRIGHT', 'REARLEFT']

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
    const res: SetupProps = {
      tab: current_tab?.tab || '',
      key: new_line_array[0] + FRFLRRRL,
      name: current_tab?.name || '',
      value: new_line_array[new_line_array.length - 1],
    }
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
        .filter((line) => line.tab !== '' && line.key !== '' && line.value !== '')
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

  // pop all lines that contain notes
  const content_without_notes = content.filter((line: string) => !line.startsWith(notes_line_start))

  // add new line with all notes together
  const content_with_notes_joined = [...content_without_notes, notes_in_one_line]

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

  const createSetups = async (new_setups: SetupCompleteProps[]): Promise<void> => {
    setSetups((currentSetups: SetupCompleteProps[]) => {
      return [...currentSetups, ...new_setups]
    })
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
  }

  return (
    <SetupContext.Provider value={{ setups: setups, updateSetups: updateSetups }}>
      {children}
    </SetupContext.Provider>
  )
}
