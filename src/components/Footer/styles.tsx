import styled from 'styled-components'

export const Wrapper = styled.footer`
  align-items: center;
  background: #202020;
  color: #ffffff;
  display: flex;
  flex-basis: 100%;
  font-size: 0.9rem;
  gap: 0.35rem;
  grid-area: footer;
  height: 3rem;
  justify-content: center;
`

export const WrapperCopyright = styled.span``

export const WrapperVersion = styled.a`
  color: inherit;
  text-decoration: none;
`

export const WrapperIcon = styled.a`
  color: inherit;
  text-decoration: none;

  svg {
    :hover {
      color: #02c3ee;
    }
  }
`