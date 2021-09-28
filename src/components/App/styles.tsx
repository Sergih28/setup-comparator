import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    display: table;
    height: 100vh;
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
    min-height: 100vh;
    height: 100%;
    width: 100%;
  }
`

export const Wrapper = styled.div`
  align-content: stretch;
  background: ${({ theme }): string => theme.common.main};
  color: ${({ theme }): string => theme.primary.font.light.alternate};
  display: grid;
  grid-template-areas:
    'navbar'
    'main'
    'footer';
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  height: 100%;
  width: 100%;

  hr {
    border-bottom: 1px solid ${({ theme }): string => theme.border.primary};
    border-left: 0;
    border-right: 0;
    border-top: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: ${({ theme }): string => theme.primary.font.light.normal};
    text-decoration: underline;
  }
`
