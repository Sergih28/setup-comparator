import { tabs } from './Navbar'
import Table from './Table'

const Main = () => (
  <div id="main">
    <div className="row no-padding">
      <div className="col s12 no-padding">
        <ul className="tabs tabs-fixed-width">
          {tabs.map((tab: string, key: number) => (
            <li className="tab col s2" key={key}>
              <a className={key === 0 ? 'active' : ''} href={`#${tab}badge`}>
                <span className="badge" id="setupstabbadge"></span>
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Table />
    </div>
  </div>
)

export default Main
