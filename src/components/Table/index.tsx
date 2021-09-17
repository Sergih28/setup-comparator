import React, { ReactElement, useEffect, useRef, useState } from 'react'

import {
  Tab,
  Table,
  TableCaption,
  TabPanel,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

import { useSetup } from 'hooks/Setup'
import { empty_setup, tabs } from 'hooks/Setup/assets'
import {
  DifferencesListProps,
  SetupCompleteProps,
  SetupKeysToShowProps,
  SetupProps,
} from 'hooks/Setup/types'

import { tableCaptionText } from './utils'

import {
  PanelsProps,
  SetupsNamesRowProps,
  TableBodyProps,
  TableFooterProps,
  TableHeadProps,
  TabsProps,
} from './types'

import { MyTabs, TabListStyled, TabPanelsStyled } from './styles'

const SetupsNamesRow = ({ setups }: SetupsNamesRowProps): ReactElement => (
  <>
    {setups?.map((setup: SetupCompleteProps, key2: number) => (
      <Th style={{ textAlign: 'center' }} key={key2}>
        {setup.name}
      </Th>
    ))}
  </>
)

const TableHead = ({ setups }: TableHeadProps): ReactElement => (
  <Thead>
    <Tr>
      <Th></Th>
      <SetupsNamesRow setups={setups} />
    </Tr>
  </Thead>
)

const TableFooter = ({ setups }: TableFooterProps): ReactElement => (
  <Tfoot>
    <Tr>
      <Th></Th>
      <SetupsNamesRow setups={setups} />
    </Tr>
  </Tfoot>
)

const TableBody = ({ setups, tab, setupKeysToShow }: TableBodyProps): ReactElement => (
  <Tbody>
    {
      // Loop through an empty setup as reference
      // Add the rows when the key of the empty setup matches the current
      // setup key in the loop (checking before if we are in the same tab)

      setups &&
        setups.length > 0 &&
        empty_setup.map((default_content: SetupProps, key: number) => (
          <React.Fragment key={key}>
            {default_content.tab === tab &&
              setupKeysToShow.find((line: SetupKeysToShowProps) => line.key === default_content.key)
                ?.show && (
                <Tr>
                  {setups?.map((setup: SetupCompleteProps, key2: number) => {
                    const setup_content_in_current_key: SetupProps | undefined = setup.content.find(
                      (content: SetupProps) => content.key === default_content.key,
                    )

                    return (
                      <React.Fragment key={key2}>
                        {default_content.key === setup_content_in_current_key?.key && (
                          <>
                            {key2 === 0 && (
                              <Th title={`${default_content.key}`}>{`${default_content.name}`}</Th>
                            )}
                            <Td style={{ textAlign: 'center', whiteSpace: 'pre-wrap' }}>
                              {`${setup_content_in_current_key?.value}`}
                            </Td>
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

const MyTabPanels = ({ tabs, setups, setupKeysToShow }: PanelsProps): ReactElement => (
  <TabPanelsStyled>
    {tabs.map((tab: string) => (
      <TabPanel key={tab}>
        <Table size='sm' variant='striped'>
          <TableHead setups={setups} />
          <TableBody setups={setups} tab={tab} setupKeysToShow={setupKeysToShow} />
          <TableCaption>{tableCaptionText(setups?.length ?? 0)}</TableCaption>
          <TableFooter setups={setups} />
        </Table>
      </TabPanel>
    ))}
  </TabPanelsStyled>
)

const MyTable = (): ReactElement => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)
  const [scrollbarHeight, setScrollbarHeight] = useState<number>(0)
  const { setups, setupKeysToShow, differences } = useSetup()
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
    <TabListStyled
      ref={tabs_div}
      style={{
        height: `${50 + scrollbarHeight}px`,
        marginBottom: `${scrollbarHeight + 2}px`,
      }}
    >
      {tabs.map((tab: string): ReactElement => {
        const differences_value: number =
          differences?.list.find((item: DifferencesListProps) => item.key === tab)?.value ?? 0

        const singular_plural =
          differences_value === 1 ? ['is', 'difference'] : ['are', 'differences']
        const title = `There ${singular_plural[0]} ${differences_value} ${singular_plural[1]} in the ${tab} tab`

        return (
          <Tab key={tab} title={title}>
            {tab}
            {differences_value}
          </Tab>
        )
      })}
    </TabListStyled>
  )

  return (
    <>
      {setups && setups?.length > 0 && (
        <MyTabs isFitted>
          <MyTabList tabs={tabs} scrollbarHeight={scrollbarHeight} />
          <MyTabPanels
            tabs={tabs}
            setups={setups}
            scrollbarHeight={scrollbarHeight}
            setupKeysToShow={setupKeysToShow ?? []}
          />
        </MyTabs>
      )}
    </>
  )
}

export default MyTable
