import styled from 'styled-components'

export const Wrapper = styled.header`
  background: ${({ theme }): string => theme.primary.background.light};
  box-shadow: ${({ theme }): string => theme.border.shadow};
  color: ${({ theme }): string => theme.primary.font.light.alternate};
  display: flex;
  grid-area: navbar;
  height: 3.5rem;
  justify-content: space-between;
  user-select: none;
  width: 100%;
  z-index: 1;
`

export const LeftSide = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const Logo = styled.img`
  align-self: center;
  display: flex;
  height: 2.5rem;
`

export const RightSide = styled.div`
  display: flex;
  font-size: 1.1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  svg {
    align-self: center;
    cursor: pointer;
    display: flex;
  }

  svg:not(:first-child) {
    margin-left: 1rem;
  }

  svg:not(:last-child) {
    margin-right: 1rem;
  }

  svg:hover {
    color: ${({ theme }): string => theme.primary.font.light.normal};
  }
`
