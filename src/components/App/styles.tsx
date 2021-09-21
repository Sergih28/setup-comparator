import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    display: table;
    height: 100%;
    width: 100%;
  }

  body {
    background: #ffffff;
    display: table-cell;
    width: 100%;
  }

  html,
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  * {
    box-shadow: none !important;
  }
`
//TODO: Remove Box shadow

export const Wrapper = styled.div`
  color: ${({ theme }): string => theme.color7};
  background: ${({ theme }): string => theme.color1};
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

  hr {
    border-top: 0;
    border-right: 0;
    border-bottom: 1px solid ${({ theme }): string => theme.color5};
    border-left: 0;
  }
`
