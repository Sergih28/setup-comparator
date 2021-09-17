import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
    display: table;
}

  body {
    width: 100%;
    display: table-cell;
}

  html, body {
    font-family: sans-serif;
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
