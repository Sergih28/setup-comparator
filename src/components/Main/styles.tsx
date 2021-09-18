import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-basis: 100%;
  grid-area: main;
  height: 100%;
`

export const MyContentWrapper = styled.div`
  background: #181818;
  border-bottom: 1px solid hsla(0, 0%, 53.3%, 0.4);
  display: grid !important;
  grid-template-areas:
    'tabs'
    'tables';
  grid-template-columns: auto;
  grid-template-rows: 3rem 1fr;
  height: 100%;
  width: 100%;
`
