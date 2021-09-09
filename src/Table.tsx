import React, { useState, useEffect, useRef } from 'react'
import { tabs } from './Navbar'
import { useSetup, SetupCompleteProps } from './SetupContext'
import { SetupProps, empty_setup } from './setup'
import { ReactElement } from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
import { ScaleFade } from '@chakra-ui/react'
import { Badge } from '@chakra-ui/react'

interface TabsProps {
  tabs: string[]
  scrollbarHeight: number
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
  scrollbarHeight: number
}

const MyTabPanels = ({ tabs, setups, scrollbarHeight }: PanelsProps) => (
  <TabPanels className="main-table" style={{ paddingTop: `3px` }}>
    {tabs.map((tab: string, key: number) => (
      <TabPanel key={key}>
        <Table size="sm" variant="striped">
          <TableHead setups={setups} />
          <TableCaption>You are comparing rFactor 2 setups</TableCaption>
          <TableBody setups={setups} tab={tab} />
          <TableFooter setups={setups} />
        </Table>
      </TabPanel>
    ))}
  </TabPanels>
)

const MyTable = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [scrollbarHeight, setScrollbarHeight] = useState<number>(0)
  const { setups } = useSetup()
  const tabs_div = useRef(null)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
    const scrollbar_height: HTMLElement | undefined = tabs_div.current
      ? tabs_div.current
      : undefined
    if (typeof scrollbar_height === 'undefined') return

    if (scrollbar_height) {
      const h = scrollbar_height as HTMLElement
      setScrollbarHeight(h.offsetHeight - h.clientHeight - 2)
    }
  }

  useEffect((): (() => void) => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [windowWidth, scrollbarHeight])

  useEffect(() => {
    setTimeout(() => handleResize(), 0)
  }, [setups])

  const MyTabList = ({ tabs, scrollbarHeight }: TabsProps): ReactElement => (
    <TabList
      className="tab-sticky main-tabs"
      ref={tabs_div}
      style={{
        height: `${50 + scrollbarHeight}px`,
        marginBottom: `${scrollbarHeight + 2}px`,
      }}
    >
      {tabs.map((tab: string, key: number) => (
        <Tab key={key}>
          {tab}
          <div className="badge">0</div>
        </Tab>
      ))}
    </TabList>
  )

  return (
    <ScaleFade
      in={setups && setups?.length > 0}
      initialScale={0.8}
      className="grid-children"
    >
      {setups && setups?.length > 0 && (
        <Tabs isFitted className="main-grid">
          <MyTabList tabs={tabs} scrollbarHeight={scrollbarHeight} />
          <MyTabPanels
            tabs={tabs}
            setups={setups}
            scrollbarHeight={scrollbarHeight}
          />
        </Tabs>
      )}
    </ScaleFade>
  )
}

export default MyTable
