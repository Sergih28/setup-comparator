import { useState, useContext, createContext, useEffect } from 'react'
import { SetupProps, empty_setup } from './setup'

export interface SetupCompleteProps {
  name: string
  content: SetupProps[]
}

interface SetupContextProps {
  setups: SetupCompleteProps[]
  updateSetups: (new_setups: FileList) => void
}

const SetupContext = createContext<Partial<SetupContextProps>>({})

export const useSetup = () => useContext(SetupContext)

const cleanSlashes = (line: string) => {
  let new_line = line

  new_line = new_line.trim()
  if (new_line.startsWith('//'))
    new_line = new_line.substring(2, new_line.length)

  return new_line
}

const splitByEquals = (line: string): string[] => {
  let new_line = line

  if (new_line.includes('//')) new_line = new_line.replace('//', '=')
  const new_line_array = new_line.split('=')

  return new_line_array
}

const getLineTitle = (current_title: string, line: string) => {
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
        item.key === new_line_array[0] ||
        item.key === new_line_array[0] + FRFLRRRL
    ).length > 0
  ) {
    const current_tab = empty_setup.find(
      (item: SetupProps) =>
        item.key === new_line_array[0] ||
        item.key === new_line_array[0] + FRFLRRRL
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

const getSetupContent = (files_in_lines: string[][]): Array<SetupProps>[] => {
  // FRFLRRRL is a variable to save the value
  // when we are in a FRONTRIGHT, FRONTLEFT, REARRIGHT or REARLEFT
  // group, so we can add it to the key to differentiate each other
  let FRFLRRRL = ''

  const content: Array<SetupProps>[] = files_in_lines.map(
    (setup: string[], key: number): Array<SetupProps> => {
      const cleaned_lines: Array<SetupProps> = setup
        .map((line: string) => {
          FRFLRRRL = getLineTitle(FRFLRRRL, line)
          return cleanLine(FRFLRRRL, line)
        })
        .filter(
          (line) => line.tab !== '' && line.key !== '' && line.value !== ''
        )
      return cleaned_lines
    }
  )

  return content
}

const separateFilesIntoLines = (files: string[]): string[][] =>
  Array.prototype.map.call(files, (file: string): string[] =>
    file.split('\n')
  ) as string[][]

export const SetupProvider = ({ children }: any) => {
  const [setups, setSetups] = useState<SetupCompleteProps[]>([])

  useEffect(() => {
    console.info('SETUPS HAVE BEEN UPDATED', setups)
  }, [setups])

  const createSetups = async (setups: FileList) => {
    const new_setups: SetupCompleteProps[] = Array.from(setups).map(
      (setup: File): SetupCompleteProps => ({
        name: setup.name,
        content: [],
      })
    )

    setSetups((currentSetups: SetupCompleteProps[]) => {
      return [...currentSetups, ...new_setups]
    })
  }

  const readFiles = async (files_list: FileList): Promise<unknown> => {
    console.log(performance.now())
    let files = Array.from(files_list).map((file) => {
      let reader = new FileReader()
      console.log(performance.now())
      console.log('promise', file)
      return new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result)
        reader.onerror = () => reject(reader)
        reader.readAsText(file)
      })
    })

    console.log(performance.now())
    const r = (await Promise.all(files)) as string[]
    console.log('r', 'files', r, files)
    return files
  }

  const fillSetupData = (content: Array<SetupProps>[]) => {
    setSetups((setups: SetupCompleteProps[]): SetupCompleteProps[] => {
      const r = setups.map((setup, key) => {
        const filtered_setup = content.find(
          (content_temp, key2: number) => key === key2
        )
        const new_content =
          typeof filtered_setup !== 'undefined' && filtered_setup.length > 0
            ? filtered_setup
            : [...setup.content]

        return { ...setup, content: new_content }
      })

      return r
    })
  }

  const updateSetups = async (new_setups: FileList) => {
    // Create new empty setups with the file name
    createSetups(new_setups)

    // read the files
    const files: string[] = await Promise.all(
      (await readFiles(new_setups)) as string[]
    )

    // separate files into lines
    const files_in_lines: string[][] = separateFilesIntoLines(files)

    // Put the setup content into an array of Setup objects of Setups array
    const content: Array<SetupProps>[] = getSetupContent(files_in_lines)

    // Add the content of the setups that were created before with only the name
    fillSetupData(content)
  }

  return (
    <SetupContext.Provider
      value={{ setups: setups, updateSetups: updateSetups }}
    >
      {children}
    </SetupContext.Provider>
  )
}
