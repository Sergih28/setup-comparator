import React, { ReactElement, useState } from 'react'

import styled from 'styled-components'

import { useSetup } from 'hooks/Setup'
import { empty_setup, tabs, tabs_selection } from 'hooks/Setup/assets'
import { DifferencesListProps, DifferencesProps, TabsSelectionProps } from 'hooks/Setup/types'

import { ContentProps, TabProps } from './types'

import { Badge, TabContent, Wrapper } from './styles'

const TabsWrapper = ({
  tabs,
  onClick,
  differences,
  tabs_selection,
}: {
  differences: DifferencesProps | undefined
  onClick: any
  tabs: string[]
  tabs_selection: TabsSelectionProps[]
}): ReactElement => (
  <MyTabsWrapper>
    {tabs.map((tab: string): ReactElement => {
      const differences_value: number =
        differences?.list.find((item: DifferencesListProps) => item.key === tab)?.value ?? 0

      const singular_plural =
        differences_value === 1 ? ['is', 'difference'] : ['are', 'differences']
      const title = `There ${singular_plural[0]} ${differences_value} ${singular_plural[1]} in the ${tab} tab`

      const tab_selected: boolean =
        tabs_selection.find((tab_selection: TabsSelectionProps) => tab_selection.name === tab)
          ?.show ?? (false as boolean)

      return (
        <React.Fragment key={tab}>
          <MyTab
            name={tab}
            onClick={(): void => onClick(tab)}
            differences={differences_value}
            title={title}
            selected={tab_selected}
          />
        </React.Fragment>
      )
    })}
  </MyTabsWrapper>
)

const TabsContentsWrapper = ({ contents }: { contents: ContentProps[] }): ReactElement => (
  <>
    {contents.map((content: ContentProps) => (
      <TabContent key={content.tab} active={!content.show}>
        {content.content}
      </TabContent>
    ))}
  </>
)

const MyTabsWrapper = styled.div`
  background: #ffffff;
  grid-area: tabs;
  overflow-x: auto;
  position: sticky !important;
  top: 0 !important;
  display: flex;
  flex-basis: 100%;
  align-items: stretch;
`

const MyTab = ({
  name,
  onClick,
  differences,
  title,
  selected,
}: {
  differences: number
  name: string
  onClick: any
  selected: boolean
  title: string
}): ReactElement => (
  <Wrapper onClick={onClick} title={title} style={{ background: selected ? 'orange' : 'inherit' }}>
    <span>{name}</span>
    <Badge>{differences}</Badge>
  </Wrapper>
)

const Tabs = (): ReactElement => {
  const { setups, setupKeysToShow, differences } = useSetup()
  const [contents, setContents] = useState<ContentProps[]>([
    { content: 'content tab1', tab: 'Setup', show: true },
    { content: 'content tab2', tab: 'General', show: false },
    { content: 'content tab3', tab: 'Suspension', show: false },
    { content: 'content tab4', tab: 'Chassis', show: false },
    { content: 'content tab5', tab: 'Advanced', show: false },
  ])
  const [tabsSelection, setTabsSelection] = useState<TabsSelectionProps[]>(tabs_selection)

  const handleTabClick = (tab: string): void => {
    setContents((old_contents: ContentProps[]): ContentProps[] =>
      old_contents.map((old_content: ContentProps) => ({
        ...old_content,
        show: old_content.tab === tab,
      })),
    )
    setTabsSelection((old_tabs: TabsSelectionProps[]): TabsSelectionProps[] =>
      old_tabs.map((old_tab: TabsSelectionProps) => ({
        ...old_tab,
        show: old_tab.name === tab,
      })),
    )
  }

  return (
    <>
      {setups && setups?.length > 0 && (
        <>
          <TabsWrapper
            tabs={tabs}
            tabs_selection={tabsSelection}
            onClick={handleTabClick}
            differences={differences}
          ></TabsWrapper>
          <TabsContentsWrapper contents={contents} />
        </>
      )}
    </>
  )
}

export default Tabs
