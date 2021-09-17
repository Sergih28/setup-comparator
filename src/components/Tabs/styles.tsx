import styled from 'styled-components'

import { TabContentProps } from './types'

export const Wrapper = styled.div`
  flex: 1;
  background: #fff00d45;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1.2rem;
  padding-right: 1.2rem;

  :not(:last-child) {
    border-right: 1px solid #43f;
  }

  :hover {
    cursor: pointer;
    background: #fff00d86;
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
  background: limegreen;
  align-items: flex-start;
  justify-content: center;
`
