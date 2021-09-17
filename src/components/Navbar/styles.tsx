import styled from 'styled-components'

export const Wrapper = styled.div`
  background: #ff3000;
  display: flex;
  grid-area: navbar;
  height: 3.5rem;
  justify-content: space-between;
  width: 100%;
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
  color: #ffffff;
  display: flex;
  font-size: 1.1rem;
  padding-left: 1rem;
  padding-right: 1rem;

  svg {
    align-self: center;
    display: flex;
  }

  svg:not(:first-child) {
    margin-left: 1rem;
  }

  svg:not(:last-child) {
    margin-right: 1rem;
  }
`
