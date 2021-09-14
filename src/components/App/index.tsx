import { ReactElement } from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import { SetupProvider } from 'hooks/Setup'

import Footer from 'components/Footer'
import Main from 'components/Main'
import Navbar from 'components/Navbar'

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
