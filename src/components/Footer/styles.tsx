import styled from 'styled-components'

export const Wrapper = styled.footer`
  align-items: center;
  background: ${({ theme }): string => theme.primary.background.light};
  color: ${({ theme }): string => theme.primary.font.light.alternate};
  display: flex;
  flex-basis: 100%;
  font-size: 0.9rem;
  gap: 0.35rem;
  grid-area: footer;
  height: 3rem;
  justify-content: center;
  user-select: none;
`

export const WrapperCopyright = styled.span``

export const WrapperVersion = styled.a``

export const WrapperIcon = styled.a``
