import styled from 'styled-components'

export const Wrapper = styled.footer`
  grid-area: footer;
  display: flex;
  font-size: 0.9rem;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background: #202020;
  height: 3rem;
`

export const WrapperCopyright = styled.span``

export const WrapperVersion = styled.a`
  text-decoration: none;
  color: inherit;
`

export const WrapperIcon = styled.a`
  text-decoration: none;
  color: inherit;

  svg {
    :hover {
      color: #02c3ee;
    }
  }
`
