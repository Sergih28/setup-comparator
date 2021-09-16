import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    height: 100vh !important;
    margin: 0;
    padding: 0;
  }
`

export const Wrapper = styled.div`
  align-content: stretch;
  display: grid;
  grid-template-areas:
    'navbar'
    'main'
    'footer';
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  width: 100%;
`
