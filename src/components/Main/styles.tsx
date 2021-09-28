import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-basis: 100%;
  grid-area: main;
  height: 100%;
`

export const MyContentWrapper = styled.div`
  background: ${({ theme }): string => theme.common.main};
  display: grid !important;
  grid-template-areas:
    'tabs'
    'tables';
  grid-template-columns: auto;
  grid-template-rows: 3rem 1fr;
  height: 100%;
  width: 100%;
`
