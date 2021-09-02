import { tabs } from './Navbar'
import { useSetup } from './SetupContext'

const Table = () => {
  const { setups } = useSetup()

  return (
    <>
      {tabs.map((tab: string, key: number) => (
        <div
          key={key}
          id={`${tab}tab`}
          custom-role="table"
          className="col s12 customTab no-padding"
        >
          {/*<table id={`${tab}tabTable`} className="highlight responsive-table">
            <thead>
              <tr>
                <th></th>
                {setups?.map((setup: SetupCompleteProps, key2: number) => (
                  <th key={key2}>{setup?.name}</th>
                ))}
              </tr>
            </thead>
          </table>*/}
        </div>
      ))}
      <p>NAME: {setups?.map((setup) => setup?.name)}</p>
      <p>{JSON.stringify(setups)}</p>
    </>
  )
}

export default Table
