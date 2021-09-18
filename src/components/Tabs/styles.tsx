import styled from 'styled-components'

import { TabContentProps } from './types'

export const Wrapper = styled.div`
  flex: 1;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  color: #ffffff;

  :not(:last-child) {
    border-right: 1px solid hsla(0, 0%, 53.3%, 0.4);
  }

  :hover {
    cursor: pointer;
    background: #4d4d4d;
  }

  span {
    user-select: none;
  }
`

export const Badge = styled.div`
  font-size: 0.75rem;
  margin-left: 0.4rem;
  margin-top: -0.65rem;
  user-select: none;
`

export const TabContent = styled.div<TabContentProps>`
  display: ${({ active }): string => (!active ? 'flex' : 'none')};
  flex-basis: 100%;
  align-items: stretch;
  background: #181818;
  color: #ffffff;
  align-items: flex-start;
  justify-content: center;
  border-top: 1px solid hsla(0, 0%, 53.3%, 0.4);
`
