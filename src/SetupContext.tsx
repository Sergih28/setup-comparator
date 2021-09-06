import { useState, useContext, createContext, useEffect } from 'react'
import { SetupProps, emptySetup } from './Setup'

export interface SetupCompleteProps {
  name: string
  content: SetupProps[]
}

interface SetupContextProps {
  setups: SetupCompleteProps[]
  updateSetups: (newSetups: FileList) => void
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
    emptySetup.filter(
      (item) =>
        item.key === new_line_array[0] ||
        item.key === new_line_array[0] + FRFLRRRL
    ).length > 0
  ) {
    const current_tab = emptySetup.find(
      (item) =>
        item.key === new_line_array[0] ||
        item.key === new_line_array[0] + FRFLRRRL
    )
    const res = {
      tab: current_tab?.tab || '',
      key: new_line_array[0] + FRFLRRRL,
      name: current_tab?.name || '',
      value: new_line_array[new_line_array.length - 1],
    }
    return res
  }

  return { tab: '', key: '', name: '', value: '' }
}

const getSetupContent = (filesInLines: string[][]): Array<SetupProps>[] => {
  // FRFLRRRL is a variable to save the value
  // when we are in a FRONTRIGHT, FRONTLEFT, REARRIGHT or REARLEFT
  // group, so we can add it to the key to differentiate each other
  let FRFLRRRL = ''

  const content: Array<SetupProps>[] = filesInLines.map(
    (setup: string[], key: number): Array<SetupProps> => {
      const cleanLines: Array<SetupProps> = setup
        .map((line: string) => {
          FRFLRRRL = getLineTitle(FRFLRRRL, line)
          return cleanLine(FRFLRRRL, line)
        })
        .filter(
          (line) => line.tab !== '' && line.key !== '' && line.value !== ''
        )
      return cleanLines
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

  const createSetup = async (name: string) => {
    const newSetup: SetupCompleteProps = {
      name: name,
      content: [],
    }

    setSetups((currentSetups: SetupCompleteProps[]) => {
      return [...currentSetups, newSetup]
    })
  }

  const readFiles = async (filesList: FileList): Promise<unknown> => {
    let files = Array.from(filesList).map((file) => {
      let reader = new FileReader()

      // Create new empty setup with the file name
      const fileName = file.name
      if (
        setups.filter((setup: SetupCompleteProps) => setup.name === fileName)
          .length === 0
      ) {
        createSetup(fileName)
      }

      return new Promise((resolve) => {
        reader.onload = () => resolve(reader.result)
        reader.readAsText(file)
      })
    })

    return files
  }

  const fillSetupData = (content: Array<SetupProps>[]) => {
    setSetups((currentSetups: SetupCompleteProps[]): SetupCompleteProps[] => {
      const r = currentSetups.map((setup, key) => {
        const filtered_setup = content.find(
          (content_temp, key2: number) => key === key2
        )
        const r =
          typeof filtered_setup !== 'undefined' && filtered_setup.length > 0
            ? filtered_setup
            : [...setup.content]

        return { ...setup, content: r }
      })

      return r
    })
  }

  const updateSetups = async (newSetups: FileList) => {
    // read the files
    const files: string[] = await Promise.all(
      (await readFiles(newSetups)) as string[]
    )

    // separate files into lines
    const filesInLines: string[][] = separateFilesIntoLines(files)

    // Put the setup content into an array of Setup objects of Setups array
    const content: Array<SetupProps>[] = getSetupContent(filesInLines)

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
