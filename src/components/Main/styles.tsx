import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  grid-area: main;
  height: 100%;
`

export const MyContentWrapper = styled.div`
  background: blue;
  display: grid !important;
  grid-template-areas:
    'tabs'
    'tables';
  grid-template-columns: auto;
  grid-template-rows: 50px 1fr;
  height: 100%;
  width: 100%;
`
