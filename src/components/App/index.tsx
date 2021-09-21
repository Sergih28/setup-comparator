import { ReactElement } from 'react'

import { ModalProvider } from 'hooks/Modal'
import { SetupProvider } from 'hooks/Setup'
import { ThemeProvider } from 'hooks/Theme'

import Footer from 'components/Footer'
import Main from 'components/Main'
import Navbar from 'components/Navbar'

import { GlobalStyle, Wrapper } from './styles'

function App(): ReactElement {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Wrapper>
          <ModalProvider>
            <SetupProvider>
              <Navbar />
              <Main />
              <Footer />
            </SetupProvider>
          </ModalProvider>
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default App
