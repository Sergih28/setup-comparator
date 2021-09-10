import React, { useState, useEffect, useRef, ReactElement } from 'react'

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  ScaleFade,
} from '@chakra-ui/react'

import { tabs, SetupProps, empty_setup } from './setup'
import { useSetup, SetupCompleteProps } from './SetupContext'

interface TabsProps {
  tabs: string[]
  scrollbarHeight: number
}

interface DifferencesListProps {
  key: 'Setup' | 'General' | 'Suspension' | 'Chassis' | 'Advanced'
  value: number
}

interface DifferencesProps {
  total: number
  list: DifferencesListProps[]
}

const getSetupsNames = (setups: SetupCompleteProps[] | undefined): ReactElement[] | undefined =>
  setups?.map((setup: SetupCompleteProps, key2: number) => (
    <Th style={{ textAlign: 'center' }} key={key2}>
      {setup.name}
    </Th>
  ))

interface TableHeadProps {
  setups: SetupCompleteProps[] | undefined
}

const TableHead = ({ setups }: TableHeadProps): ReactElement => (
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

const TableFooter = ({ setups }: TableFooterProps): ReactElement => (
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

const TableBody = ({ setups, tab }: TableBodyProps): ReactElement => (
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
                  const setup_content_in_current_key: SetupProps | undefined = setup.content.find(
                    (content: SetupProps) => content.key === default_content.key,
                  )

                  return (
                    <React.Fragment key={key2}>
                      {default_content.key === setup_content_in_current_key?.key && (
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

const MyTabPanels = ({ tabs, setups }: PanelsProps): ReactElement => (
  <TabPanels className='main-table' style={{ paddingTop: '3px' }}>
    {tabs.map((tab: string, key: number) => (
      <TabPanel key={key}>
        <Table size='sm' variant='striped'>
          <TableHead setups={setups} />
          <TableCaption>You are comparing rFactor 2 setups</TableCaption>
          <TableBody setups={setups} tab={tab} />
          <TableFooter setups={setups} />
        </Table>
      </TabPanel>
    ))}
  </TabPanels>
)

const empty_differences: DifferencesProps = {
  total: 0,
  list: [
    {
      key: 'Setup',
      value: 0,
    },
    {
      key: 'General',
      value: 0,
    },
    {
      key: 'Suspension',
      value: 0,
    },
    {
      key: 'Chassis',
      value: 0,
    },
    {
      key: 'Advanced',
      value: 0,
    },
  ],
}

const MyTable = (): ReactElement => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [scrollbarHeight, setScrollbarHeight] = useState<number>(0)
  const { setups } = useSetup()
  const [differences] = useState<DifferencesProps>(empty_differences)
  const tabs_div = useRef(null)

  const handleResize = (): void => {
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

    return (): void => window.removeEventListener('resize', handleResize)
  }, [windowWidth, scrollbarHeight])

  useEffect(() => {
    setTimeout(() => handleResize(), 0)
  }, [setups])

  const MyTabList = ({ tabs, scrollbarHeight }: TabsProps): ReactElement => (
    <TabList
      className='tab-sticky main-tabs'
      ref={tabs_div}
      style={{
        height: `${50 + scrollbarHeight}px`,
        marginBottom: `${scrollbarHeight + 2}px`,
      }}
    >
      {tabs.map((tab: string, key: number): ReactElement => {
        const differences_value: number =
          differences.list.find((item: DifferencesListProps) => item.key === tab)?.value ?? 0

        const singular_plural =
          differences_value === 1 ? ['is', 'difference'] : ['are', 'differences']
        const title = `There ${singular_plural[0]} ${differences_value} ${singular_plural[1]} in the ${tab} tab`

        return (
          <Tab key={key} title={title}>
            {tab}
            <div className='badge'>{differences_value}</div>
          </Tab>
        )
      })}
    </TabList>
  )

  return (
    <ScaleFade in={setups && setups?.length > 0} initialScale={0.8} className='grid-children'>
      {setups && setups?.length > 0 && (
        <Tabs isFitted className='main-grid'>
          <MyTabList tabs={tabs} scrollbarHeight={scrollbarHeight} />
          <MyTabPanels tabs={tabs} setups={setups} scrollbarHeight={scrollbarHeight} />
        </Tabs>
      )}
    </ScaleFade>
  )
}

export default MyTable
