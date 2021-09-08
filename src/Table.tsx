import React from 'react'
import { tabs } from './Navbar'
import { useSetup, SetupCompleteProps } from './SetupContext'
import { SetupProps, empty_setup } from './setup'
import { Tab } from '@headlessui/react'
import { ReactElement } from 'react'

interface TabsProps {
  tabs: string[]
}

const Tabs = ({ tabs }: TabsProps): ReactElement => (
  <Tab.List>
    {tabs.map((tab: string, key: number) => (
      <Tab key={key}>{tab}</Tab>
    ))}
  </Tab.List>
)

interface TableHeadProps {
  setups: SetupCompleteProps[] | undefined
}

const TableHead = ({ setups }: TableHeadProps) => (
  <thead>
    <tr>
      {setups?.map((setup: SetupCompleteProps, key2: number) => (
        <th key={key2}>{setup.name}</th>
      ))}
    </tr>
  </thead>
)

interface TableBodyProps {
  setups: SetupCompleteProps[] | undefined
  tab: string
}

const TableBody = ({ setups, tab }: TableBodyProps) => (
  <tbody>
    {
      // Loop through an empty setup as reference
      // Add the rows when the key of the empty setup matches the current
      // setup key in the loop (checking before if we are in the same tab)

      setups &&
        setups.length > 0 &&
        empty_setup.map((default_content: SetupProps, key: number) => (
          <React.Fragment key={key}>
            {default_content.tab === tab && (
              <tr>
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
                        <td>
                          {`${default_content.name}: ${setup_content_in_current_key?.value}`}
                        </td>
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

interface PanelsProps {
  tabs: string[]
  setups: SetupCompleteProps[] | undefined
}

const Panels = ({ tabs, setups }: PanelsProps) => (
  <Tab.Panels>
    {tabs.map((tab: string, key: number) => (
      <Tab.Panel key={key}>
        <table>
          <TableHead setups={setups} />
          <TableBody setups={setups} tab={tab} />
        </table>
      </Tab.Panel>
    ))}
  </Tab.Panels>
)

const Table = () => {
  const { setups } = useSetup()

  return (
    <>
      <div className="w-full max-w-md px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tabs tabs={tabs} />
          <Panels tabs={tabs} setups={setups} />
        </Tab.Group>
      </div>
    </>
  )
}

export default Table
