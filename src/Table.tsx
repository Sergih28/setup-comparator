import { tabs } from './Navbar'
import { useSetup, SetupCompleteProps } from './SetupContext'
import { SetupProps } from './setup'
import { Tab } from '@headlessui/react'
import { ReactElement } from 'react'

const Tabs = ({ tabs }: { tabs: string[] }): ReactElement => (
  <Tab.List>
    {tabs.map((tab: string, key: number) => (
      <Tab key={key}>{tab}</Tab>
    ))}
  </Tab.List>
)

const Panels = ({
  tabs,
  setups,
}: {
  tabs: string[]
  setups: SetupCompleteProps[] | undefined
}) => (
  <Tab.Panels>
    {tabs.map((tab: string, key: number) => (
      <Tab.Panel key={key}>
        <table>
          <thead>
            <tr>
              {setups?.map((setup: SetupCompleteProps, key2: number) => (
                <th key={key2}>{setup.name}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <>
              {setups &&
                setups.length > 0 &&
                setups[0].content.map((content: SetupProps, key3: number) => (
                  <>
                    {content.tab === tab && (
                      <tr key={key3}>
                        {setups?.map(
                          (setup_inside: SetupCompleteProps, key4: number) => (
                            <>
                              {content.key ===
                                setup_inside.content.find(
                                  (cont: SetupProps) => cont.key === content.key
                                )?.key && (
                                <td key={key4}>
                                  {setup_inside.content.find(
                                    (cont: SetupProps) =>
                                      cont.key === content.key
                                  )?.tab === tab &&
                                    `${content.name}: ${
                                      setup_inside.content.find(
                                        (cont: SetupProps) =>
                                          cont.key === content.key
                                      )?.value
                                    }`}
                                </td>
                              )}
                            </>
                          )
                        )}
                      </tr>
                    )}
                  </>
                ))}
            </>
          </tbody>
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
