import React, { ReactElement, useState } from 'react'

import { useSetup } from 'hooks/Setup'
import { empty_setup, tabs, tabs_selection } from 'hooks/Setup/assets'
import {
  DifferencesListProps,
  SetupCompleteProps,
  SetupKeysToShowProps,
  SetupProps,
} from 'hooks/Setup/types'

import {
  MyTabProps,
  PanelsProps,
  SetupsNamesRowProps,
  TableBodyProps,
  TableFooterProps,
  TableHeadProps,
  TabsSelectionProps,
  TabsWrapperProps,
} from './types'

import { Badge, FirstColumn, MyTabsWrapper, TabContent, Table, Td, Wrapper } from './styles'

const TabsWrapper = ({
  tabs,
  onClick,
  differences,
  tabs_selection,
  showOnlyDifferences,
}: TabsWrapperProps): ReactElement => (
  <MyTabsWrapper>
    {tabs.map((tab: string): ReactElement => {
      let differences_value = 0
      !showOnlyDifferences
        ? empty_setup.forEach((line: SetupProps) => line.tab === tab && differences_value++)
        : (differences_value =
            differences?.list.find((item: DifferencesListProps) => item.key === tab)?.value ?? 0)

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

const SetupsNamesRow = ({ setups }: SetupsNamesRowProps): ReactElement => (
  <>
    <th>Setup Name</th>
    {setups?.map((setup: SetupCompleteProps, key2: number) => (
      <th key={key2}>{setup.name}</th>
    ))}
  </>
)

const TableHead = ({ setups }: TableHeadProps): ReactElement => (
  <thead>
    <tr>
      <SetupsNamesRow setups={setups} />
    </tr>
  </thead>
)

const TableFooter = ({ setups }: TableFooterProps): ReactElement => (
  <tfoot>
    <tr>
      <SetupsNamesRow setups={setups} />
    </tr>
  </tfoot>
)

const TableBody = ({
  setups,
  tab,
  setupKeysToShow,
  showOnlyDifferences,
}: TableBodyProps): ReactElement => (
  <tbody>
    {
      // Loop through an empty setup as reference
      // Add the rows when the key of the empty setup matches the current
      // setup key in the loop (checking before if we are in the same tab)

      setups &&
        setups.length > 0 &&
        empty_setup.map((default_content: SetupProps, key: number) => (
          <React.Fragment key={key}>
            {default_content.tab === tab &&
              (setupKeysToShow.find(
                (line: SetupKeysToShowProps) => line.key === default_content.key,
              )?.show ||
                !showOnlyDifferences) && (
                <tr>
                  {setups?.map((setup: SetupCompleteProps, key2: number) => {
                    const setup_content_in_current_key: SetupProps | undefined = setup.content.find(
                      (content: SetupProps) => content.key === default_content.key,
                    )

                    return (
                      <React.Fragment key={key2}>
                        {default_content.key === setup_content_in_current_key?.key && (
                          <>
                            {key2 === 0 && (
                              <FirstColumn
                                title={`${default_content.key}`}
                              >{`${default_content.name}`}</FirstColumn>
                            )}
                            <Td>{`${setup_content_in_current_key?.value}`}</Td>
                          </>
                        )}
                      </React.Fragment>
                    )
                  })}
                </tr>
              )}
          </React.Fragment>
        ))
    }
  </tbody>
)

const TabsContentsWrapper = ({
  tabs,
  setups,
  setupKeysToShow,
  showOnlyDifferences,
}: PanelsProps): ReactElement => (
  <>
    {tabs.map(
      (tab: TabsSelectionProps): ReactElement => (
        <TabContent key={tab.name} active={!tab.show}>
          <Table>
            <TableHead setups={setups} />
            <TableBody
              setups={setups}
              tab={tab.name}
              setupKeysToShow={setupKeysToShow}
              showOnlyDifferences={showOnlyDifferences}
            />
            <TableFooter setups={setups} />
          </Table>
        </TabContent>
      ),
    )}
  </>
)

const MyTab = ({ name, onClick, differences, title, selected }: MyTabProps): ReactElement => (
  <Wrapper onClick={onClick} title={title} selected={selected}>
    <span>{name}</span>
    <Badge>{differences}</Badge>
  </Wrapper>
)

const Tabs = (): ReactElement => {
  const { setups, differences, setupKeysToShow = [], showOnlyDifferences = true } = useSetup()

  const [tabsSelection, setTabsSelection] = useState<TabsSelectionProps[]>(tabs_selection)

  const handleTabClick = (tab: string): void => {
    setTabsSelection((old_tabs: TabsSelectionProps[]): TabsSelectionProps[] =>
      old_tabs.map((old_tab: TabsSelectionProps) => {
        return {
          ...old_tab,
          show: old_tab.name === tab,
        }
      }),
    )
  }

  return (
    <>
      {setups && setups?.length > 0 && (
        <>
          <TabsWrapper
            tabs={tabs}
            setups={setups}
            tabs_selection={tabsSelection}
            onClick={handleTabClick}
            differences={differences}
            showOnlyDifferences={showOnlyDifferences}
          />
          <TabsContentsWrapper
            showOnlyDifferences={showOnlyDifferences}
            setups={setups}
            setupKeysToShow={setupKeysToShow}
            tabs={tabsSelection}
          />
        </>
      )}
    </>
  )
}

export default Tabs
