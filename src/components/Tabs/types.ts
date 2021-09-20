import { DifferencesProps, SetupCompleteProps, SetupKeysToShowProps } from 'hooks/Setup/types'

interface SetupsProps {
  setups: SetupCompleteProps[] | undefined
}

export interface TabsWrapperProps {
  differences: DifferencesProps | undefined
  onClick: (tab: string) => void
  setups: SetupCompleteProps[] | undefined
  showOnlyDifferences: boolean
  tabs: string[]
  tabs_selection: TabsSelectionProps[]
}

export interface MyTabProps {
  differences: number
  name: string
  onClick: () => void
  selected: boolean
  title: string
}

export interface TabsSelectionProps {
  name: string
  show: boolean
}

export type SetupsNamesRowProps = SetupsProps

export interface TableHeadersProps extends SetupsProps {
  differences: DifferencesProps | undefined
  showOnlyDifferences: boolean
  tab: string
  type: 'thead' | 'tfoot'
}

export interface TableBodyProps extends SetupsProps {
  setupKeysToShow: SetupKeysToShowProps[]
  showOnlyDifferences: boolean
  tab: string
}

export interface TabProps {
  name: string
}

export interface TabContentProps {
  active: boolean
}

export interface PanelsProps extends SetupsProps {
  differences: DifferencesProps | undefined
  setupKeysToShow: SetupKeysToShowProps[]
  showOnlyDifferences: boolean
  tabs: TabsSelectionProps[]
}

export interface WrapperProps {
  selected: boolean
}
