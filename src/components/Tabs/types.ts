import { ReactElement, RefObject } from 'react'

import { DifferencesProps, SetupCompleteProps, SetupKeysToShowProps } from 'hooks/Setup/types'

interface SetupsProps {
  setups: SetupCompleteProps[] | undefined
}

interface OnArrowClickProps {
  f: (side: ScrollArrowProps['side'], ref: RefObject<HTMLDivElement>) => void
}

export interface TabsWrapperProps {
  differences: DifferencesProps | undefined,
  onArrowClick: OnArrowClickProps['f'],
  onClick: (tab: string) => void
  scroll_ref: RefObject<HTMLDivElement>
  setups: SetupCompleteProps[] | undefined
  showOnlyDifferences: boolean
  show_arrows: ShowArrowProps[]
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

export interface ScrollArrowProps {
  side: 'left' | 'right'
}

export interface ShowArrowProps extends ScrollArrowProps {
  show: boolean
}

export interface ScrollArrowsProps {
  onClick: OnArrowClickProps['f']
  scroll_ref: RefObject<HTMLDivElement>
  show_arrows: ShowArrowProps[]
}

export interface ScrollArrowListProps extends ScrollArrowProps {
  icon: ReactElement
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
