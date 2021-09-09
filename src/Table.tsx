import React, { useRef, useEffect } from 'react'
import { tabs } from './Navbar'
import { useSetup, SetupCompleteProps } from './SetupContext'
import { SetupProps, empty_setup } from './setup'
import { ReactElement } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react'

interface TabsProps {
  tabs: string[]
}

const getSetupsNames = (setups: SetupCompleteProps[] | undefined) =>
  setups?.map((setup: SetupCompleteProps, key2: number) => (
    <Th style={{ textAlign: 'center' }} key={key2}>
      {setup.name}
    </Th>
  ))

interface TableHeadProps {
  setups: SetupCompleteProps[] | undefined
}

const TableHead = ({ setups }: TableHeadProps) => (
  <Thead>
    <Tr>
      <Th></Th>
      {getSetupsNames(setups)}
    </Tr>
  </Thead>
)

interface TableFooterProps {
  setups: SetupCompleteProps[] | undefined
}

const TableFooter = ({ setups }: TableFooterProps) => (
  <Tfoot>
    <Tr>
      <Th></Th>
      {getSetupsNames(setups)}
    </Tr>
  </Tfoot>
)

interface TableBodyProps {
  setups: SetupCompleteProps[] | undefined
  tab: string
}

const TableBody = ({ setups, tab }: TableBodyProps) => (
  <Tbody>
    {
      // Loop through an empty setup as reference
      // Add the rows when the key of the empty setup matches the current
      // setup key in the loop (checking before if we are in the same tab)

      setups &&
        setups.length > 0 &&
        empty_setup.map((default_content: SetupProps, key: number) => (
          <React.Fragment key={key}>
            {default_content.tab === tab && (
              <Tr>
                {setups?.map((setup: SetupCompleteProps, key2: number) => {
                  const setup_content_in_current_key: SetupProps | undefined =
                    setup.content.find(
                      (content: SetupProps) =>
                        content.key === default_content.key
                    )

                  return (
                    <React.Fragment key={key2}>
                      {default_content.key ===
                        setup_content_in_current_key?.key && (
                        <>
                          {key2 === 0 && <Th>{`${default_content.name}`}</Th>}
                          <Td
                            style={{ textAlign: 'center' }}
                          >{`${setup_content_in_current_key?.value}`}</Td>
                        </>
                      )}
                    </React.Fragment>
                  )
                })}
              </Tr>
            )}
          </React.Fragment>
        ))
    }
  </Tbody>
)

interface PanelsProps {
  tabs: string[]
  setups: SetupCompleteProps[] | undefined
}

const MyTable = () => {
  const { setups } = useSetup()

  const tab_list = useRef<HTMLDivElement>(null)
  const tab_panels = useRef<HTMLDivElement>(null)

  useEffect(() => {
    console.log(tab_list, tab_panels)
    const height = tab_list.current?.offsetHeight

    console.log(tab_panels.current?.style, height)

    // if (tab_panels.current?.style)
    //   tab_panels.current.style.marginTop = height?.toString() + 'px'
    //tab_panels.current.style.height = height
  }, [setups])

  const MyTabList = ({ tabs }: TabsProps): ReactElement => (
    <TabList ref={tab_list} style={{ position: 'sticky', top: 0 }}>
      {tabs.map((tab: string, key: number) => (
        <Tab key={key}>{tab}</Tab>
      ))}
    </TabList>
  )
  const MyTabPanels = ({ tabs, setups }: PanelsProps) => (
    <TabPanels ref={tab_panels}>
      {tabs.map((tab: string, key: number) => (
        <TabPanel key={key}>
          <Table size="sm" variant="striped">
            <TableHead setups={setups} />
            <TableBody setups={setups} tab={tab} />
            <TableFooter setups={setups} />
          </Table>
        </TabPanel>
      ))}
    </TabPanels>
  )
  return (
    <>
      {setups && setups?.length > 0 && (
        <Tabs isFitted>
          <MyTabList tabs={tabs} />
          <MyTabPanels tabs={tabs} setups={setups} />
        </Tabs>
      )}
    </>
  )
}

export default MyTable
