import { SetupCompleteProps, SetupKeysToShowProps } from 'hooks/Setup/types'

interface SetupsProps {
  setups: SetupCompleteProps[] | undefined
}

export type SetupsNamesRowProps = SetupsProps

export type TableHeadProps = SetupsProps

export type TableFooterProps = SetupsProps

export interface TabsProps {
  scrollbarHeight: number
  tabs: string[]
}
export interface TableBodyProps extends SetupsProps {
  setupKeysToShow: SetupKeysToShowProps[]
  tab: string
}

export interface PanelsProps extends SetupsProps {
  scrollbarHeight: number
  setupKeysToShow: SetupKeysToShowProps[]
  tabs: string[]
}
