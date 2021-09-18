import { SetupCompleteProps, SetupKeysToShowProps } from 'hooks/Setup/types'

interface SetupsProps {
  setups: SetupCompleteProps[] | undefined
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
