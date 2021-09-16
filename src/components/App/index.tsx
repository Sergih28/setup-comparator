import { ReactElement } from 'react'

import { ChakraProvider } from '@chakra-ui/react'

import { SetupProvider } from 'hooks/Setup'

import Footer from 'components/Footer'
import Main from 'components/Main'
import Navbar from 'components/Navbar'

import './App.scss'

import { GlobalStyle, Wrapper } from './styles'

function App(): ReactElement {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ChakraProvider>
          <SetupProvider>
            <Navbar />
            <Main />
            <Footer />
          </SetupProvider>
        </ChakraProvider>
      </Wrapper>
    </>
  )
}

export default App
