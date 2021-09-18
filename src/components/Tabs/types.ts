import { DifferencesProps, SetupCompleteProps, SetupKeysToShowProps } from 'hooks/Setup/types'

interface SetupsProps {
  setups: SetupCompleteProps[] | undefined
}

export interface TabsWrapperProps {
  differences: DifferencesProps | undefined
  onClick: (tab: string) => void
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

export type TableHeadProps = SetupsProps

export interface TableBodyProps extends SetupsProps {
  setupKeysToShow: SetupKeysToShowProps[]
  tab: string
}

export type TableFooterProps = SetupsProps

export interface TabProps {
  name: string
}

export interface TabContentProps {
  active: boolean
}

export interface Panels2Props extends SetupsProps {
  setupKeysToShow: SetupKeysToShowProps[]
  tabs: TabsSelectionProps[]
}
