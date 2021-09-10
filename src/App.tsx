import { ReactElement } from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import Footer from './Footer'
import Main from './Main'
import Navbar from './Navbar'
import { SetupProvider } from './SetupContext'

import './App.scss'

function App(): ReactElement {
  return (
    <div className='app'>
      <ChakraProvider>
        <SetupProvider>
          <Navbar />
          <Main />
          <Footer />
        </SetupProvider>
      </ChakraProvider>
    </div>
  )
}

export default App
