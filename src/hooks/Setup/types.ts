import { ReactNode } from 'react'

export interface TabsSelectionProps {
  name: string
  show: boolean
}
export interface SetupProviderProps {
  children: ReactNode
}

export interface SetupContextProps {
  differences: DifferencesProps
  setupKeysToShow: SetupKeysToShowProps[]
  setups: SetupCompleteProps[]
  updateSetups: (new_setups: FileList) => void
}

export interface SetupWithoutValueProps {
  key: string
  name: string
  tab: string
}

export interface SetupProps extends SetupWithoutValueProps {
  value: string
}

export interface SetupCompleteProps {
  content: SetupProps[]
  name: string
}

export interface SetupKeysToShowValuesProps {
  key: string
  values: string[]
}

export interface SetupCompleteRawProps {
  name: string
  raw_content: string
}

export interface SetupCompleteSplitProps {
  name: string
  split_content: string[]
}

export interface SetupKeysToShowProps {
  key: string
  show: boolean
}

export interface DifferencesListProps {
  key: 'Setup' | 'General' | 'Suspension' | 'Chassis' | 'Advanced'
  value: number
}

export interface DifferencesProps {
  list: DifferencesListProps[]
  total: number
}
