import { tabs } from './Navbar'

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
      {tabs.map((tab: string, key: number) => (
        <div
          key={key}
          id={`${tab}tab`}
          custom-role="table"
          className="col s12 customTab no-padding"
        ></div>
      ))}
    </div>
  </div>
)

export default Main
