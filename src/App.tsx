import Footer from './Footer'
import Main from './Main'
import Navbar from './Navbar'
import { SetupProvider } from './SetupContext'

function App() {
  return (
    <div className="App">
      <SetupProvider>
        <Navbar />
        <Main />
        <Footer />
      </SetupProvider>
    </div>
  )
}

export default App
