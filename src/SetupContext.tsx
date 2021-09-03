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

// FRFLRRRL is a variable to save the value
// when we are in a FRONTRIGHT, FRONTLEFT, REARRIGHT or REARLEFT
// group, so we can add it to the key to differentiate each other
let FRFLRRRL = ''

const cleanLine = (line: string): SetupProps => {
  let r = line

  r = r.trim()
  if (r.startsWith('//')) r = r.substring(2, r.length)
  if (r.includes('//')) r = r.replace('//', '=')
  let val = r.split('=')

  //Detect FRFLRRRL
  if (line.startsWith('[')) {
    FRFLRRRL = line.substring(1, line.length - 2)
    if (
      !['FRONTRIGHT', 'FRONTLEFT', 'REARRIGHT', 'REARLEFT'].includes(FRFLRRRL)
    )
      FRFLRRRL = ''
  }

  if (
    emptySetup.filter(
      (item) => item.key === val[0] || item.key === val[0] + FRFLRRRL
    ).length > 0
  ) {
    const current_tab = emptySetup.find(
      (item) => item.key === val[0] || item.key === val[0] + FRFLRRRL
    )
    const r = {
      tab: current_tab?.tab || '',
      key: val[0] + FRFLRRRL,
      name: current_tab?.name || '',
      value: val[val.length - 1],
    }
    return r
  }
  return { tab: '', key: '', name: '', value: '' }
}

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

  const separateFilesIntoLines = (files: any): string[][] =>
    Array.prototype.map.call(files, (file: string): string[] =>
      file.split('\n')
    ) as string[][]

  const ReadFiles = async (filesList: FileList): Promise<void> => {
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

    // Array of results (a very long string)
    let res = await Promise.all(files)

    const filesInLines = separateFilesIntoLines(res)

    // Put this into Setup Object
    const content: Array<SetupProps>[] = filesInLines.map(
      (lines: string[], key: number): Array<SetupProps> => {
        const cleanLines: Array<SetupProps> = lines
          .map((line: string) => cleanLine(line))
          .filter(
            (line) => line.tab !== '' && line.key !== '' && line.value !== ''
          )
        return cleanLines
      }
    )

    // Add the content of the setups created before with only the name
    setSetups((currentSetups: SetupCompleteProps[]): SetupCompleteProps[] => {
      const r = currentSetups.map((setup, key) => {
        const filtered_setup = content.find(
          (content_temp, key2) => key === key2
        )
        const r =
          typeof filtered_setup !== 'undefined'
            ? filtered_setup.length > 0
              ? filtered_setup
              : [...setup.content]
            : [...setup.content]

        return { ...setup, content: r }
      })

      return r
    })
  }

  const updateSetups = async (newSetups: FileList) => {
    await ReadFiles(newSetups)
  }

  return (
    <SetupContext.Provider
      value={{ setups: setups, updateSetups: updateSetups }}
    >
      {children}
    </SetupContext.Provider>
  )
}
