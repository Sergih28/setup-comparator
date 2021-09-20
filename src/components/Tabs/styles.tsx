import styled from 'styled-components'

import { TabContentProps, WrapperProps } from './types'

export const Wrapper = styled.div<WrapperProps>`
  background: ${({ theme, selected }): string => (selected ? theme.color6 : theme.color3)};
  color: ${({ theme, selected }): string => (selected ? theme.color1 : theme.color6)};
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  padding-left: 1.2rem;
  padding-right: 1.2rem;

  :not(:last-child) {
    border-right: 1px solid ${({ theme }): string => theme.border1};
  }

  :hover {
    background: ${({ theme, selected }): string => (selected ? theme.color7 : theme.color4)};
    cursor: pointer;
  }

  span {
    user-select: none;
  }
`

export const MyTabsWrapper = styled.div`
  align-items: stretch;
  border-bottom: 1px solid ${({ theme }): string => theme.border1};
  display: flex;
  flex-basis: 100%;
  grid-area: tabs;
  overflow-x: auto;
  position: sticky;
  top: 0;
  z-index: 10;
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
  border-collapse: separate;
  border-spacing: 0;

  /* odd / even background */
  tr:nth-child(odd) td {
    background: ${({ theme }): string => theme.color2};
  }
  tr:nth-child(even) td {
    background: ${({ theme }): string => theme.color1};
  }

  /* Borders */
  tr:not(:last-child) td,
  tr:not(:last-child) th {
    border-bottom: 0;
  }
  tr td,
  tr th {
    border-left: 0;
  }
  tr td:last-child {
    border-right: 0;
  }
  thead th:not(:last-child),
  tfoot th:not(:last-child) {
    border-right: 1px solid ${({ theme }): string => theme.border1};
  }
  tfoot th {
    border-bottom: 1px solid ${({ theme }): string => theme.border1};
  }

  /* First Column */
  tr th:first-child {
    position: sticky;
    left: 0;
  }
  tbody tr:nth-child(odd) th:first-child {
    background: ${({ theme }): string => theme.color2};
  }
  thead tr th,
  tfoot tr th,
  tbody tr:nth-child(even) th:first-child {
    background: ${({ theme }): string => theme.color1};
  }

  /* Padding */
  td,
  th {
    padding: ${({ theme }): string => theme.padding1};
  }
`

export const TabContent = styled.div<TabContentProps>`
  display: ${({ active }): string => (!active ? 'block' : 'none')};
  grid-area: tables;
  overflow-x: auto;
  width: 100%;
`

export const FirstColumn = styled.th`
  border: 1px solid ${({ theme }): string => theme.border1};
  text-align: justify;
`

export const Td = styled.td`
  border: 1px solid ${({ theme }): string => theme.border1};
  text-align: center;
  white-space: pre-wrap;
`
