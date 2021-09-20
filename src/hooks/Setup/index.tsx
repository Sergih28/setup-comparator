import { createContext, ReactElement, useContext, useState } from 'react'

import {
  compareSetups as compareSetupsUtils,
  processSetupsContent,
  readFiles,
  splitSetupsContent,
  updateNumberOfDifferences as updateNumberOfDifferencesUtils,
} from './utils'

import { empty_differences, empty_setup, show_keys } from './assets'

import {
  DifferencesProps,
  SetupCompleteProps,
  SetupCompleteRawProps,
  SetupCompleteSplitProps,
  SetupContextProps,
  SetupKeysToShowProps,
  SetupProps,
  SetupProviderProps,
} from './types'

const SetupContext = createContext<Partial<SetupContextProps>>({})

export const useSetup = (): Partial<SetupContextProps> => useContext(SetupContext)

export const SetupProvider = ({ children }: SetupProviderProps): ReactElement => {
  const [setups, setSetups] = useState<SetupCompleteProps[]>([])
  const [setupKeysToShow, setSetupKeysToShow] = useState<SetupKeysToShowProps[]>(show_keys)
  const [differences, setDifferences] = useState<DifferencesProps>(empty_differences)
  const [showOnlyDifferences, setShowOnlyDifferences] = useState<boolean>(true)

  const createSetups = async (new_setups: SetupCompleteProps[]): Promise<void> => {
    // TODO
    // In the future this might be
    // setSetups((currentSetups: SetupCompleteProps[]) => {
    //   return [...currentSetups, ...new_setups]
    // })
    // For now we just erase everything when loading more setups
    setSetups([...new_setups])
  }

  const compareSetups = (
    setups: SetupCompleteProps[],
    setup_keys_to_show: SetupKeysToShowProps[],
  ): SetupKeysToShowProps[] => {
    const new_setup_keys_to_show = compareSetupsUtils(setups, setup_keys_to_show)

    setSetupKeysToShow(new_setup_keys_to_show)

    return new_setup_keys_to_show
  }

  const updateNumberOfDifferences = (
    setup_keys_to_show: SetupKeysToShowProps[],
    empty_setup: SetupProps[],
  ): void => {
    const new_differences = updateNumberOfDifferencesUtils(setup_keys_to_show, empty_setup)

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
    updateNumberOfDifferences(setup_keys_to_show, empty_setup)
  }

  const updateShowOnlyDifferences = (): void => {
    setShowOnlyDifferences((old_value: boolean) => !old_value)
  }

  const values = {
    setups,
    updateSetups,
    setupKeysToShow,
    differences,
    showOnlyDifferences,
    updateShowOnlyDifferences,
  }

  return <SetupContext.Provider value={values}>{children}</SetupContext.Provider>
}
