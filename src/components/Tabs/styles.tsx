import styled from 'styled-components'

import { TabContentProps } from './types'

export const Wrapper = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  display: flex;
  flex: 1;
  justify-content: center;
  padding-left: 1.2rem;
  padding-right: 1.2rem;

  :not(:last-child) {
    border-right: 1px solid hsla(0, 0%, 53.3%, 0.4);
  }

  :hover {
    background: #4d4d4d;
    cursor: pointer;
  }

  span {
    user-select: none;
  }
`

export const MyTabsWrapper = styled.div`
  align-items: stretch;
  background: #ffffff;
  border-bottom: 1px solid #878787;
  display: flex;
  flex-basis: 100%;
  grid-area: tabs;
  overflow-x: auto;
  position: sticky !important;
  top: 0 !important;
`
//    border-top: 1px solid hsla(0, 0%, 53.3%, 0.4);

export const Badge = styled.div`
  font-size: 0.75rem;
  margin-left: 0.4rem;
  margin-top: -0.65rem;
  user-select: none;
`

export const Table = styled.table`
  width: 100%;
`

export const TabContent = styled.div<TabContentProps>`
  background: #181818;
  color: #ffffff;
  display: ${({ active }): string => ( !active ? 'block' : 'none')};
  grid-area: tables;
  overflow-x: auto;
  width: 100%;
`
