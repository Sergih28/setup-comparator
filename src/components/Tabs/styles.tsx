import styled from 'styled-components'

import { ScrollArrowProps, TabContentProps, WrapperProps } from './types'

export const Wrapper = styled.div<WrapperProps>`
  align-items: center;
  background: ${({ theme, selected }): string =>
    selected ? theme.primary.background.light : theme.secondary.background.dark};
  border-top: 1px solid ${({ theme }): string => theme.border.secondary};
  color: ${({ theme, selected }): string =>
    selected ? theme.primary.font.light.normal : theme.secondary.font.dark.alternate};
  display: flex;
  flex: 1;
  justify-content: center;
  padding-left: 1.2rem;
  padding-right: 1.2rem;

  :not(:last-child) {
    border-right: 1px solid ${({ theme }): string => theme.border.secondary};
  }

  :hover {
    background: ${({ theme }): string => theme.secondary.background.light};
    color: ${({ theme }): string => theme.secondary.font.light.normal};
    cursor: pointer;
  }

  span {
    user-select: none;
  }
`

export const MyTabsWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }): string => theme.border.secondary};
  display: grid;
  grid-area: tabs;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100%;
  position: sticky;
  position: relative;
  top: 0;
  user-select: none;
  z-index: 10;
`

export const MyTabsInnerWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  height: 100%;
  overflow-x: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    background: transparent; /* Optional: just make scrollbar invisible */
    height: 0;
    width: 0; /* Remove scrollbar space */
  }
`

export const ScrollArrow = styled.div<ScrollArrowProps>`
  align-items: center;
  background: ${({ theme }): string => theme.primary.background.light};
  color: ${({ theme }): string => theme.primary.font.light.altenate};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  left: ${({ side }): string | number => (side === 'left' ? 0 : '')};
  opacity: 0.985;
  position: absolute;
  right: ${({ side }): string | number => (side === 'right' ? 0 : '')};
  width: 2.25rem;
`

export const Badge = styled.div`
  font-size: 0.75rem;
  margin-left: 0.4rem;
  margin-top: -0.65rem;
  user-select: none;
`

export const Table = styled.table`
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;

  /* odd / even background */
  tr:nth-child(odd) td {
    background: ${({ theme }): string => theme.primary.background.light};
  }

  tr:nth-child(even) td {
    background: ${({ theme }): string => theme.primary.background.main};
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
    border-right: 1px solid ${({ theme }): string => theme.border.secondary};
  }

  tfoot th {
    border-bottom: 1px solid ${({ theme }): string => theme.border.secondary};
  }

  /* First Column */
  tr th:first-child {
    left: 0;
    position: sticky;
  }

  tbody tr:nth-child(odd) {
    background: ${({ theme }): string => theme.primary.background.light};
  }

  tbody tr:nth-child(even) {
    background: ${({ theme }): string => theme.primary.background.main};
  }

  /*thead/tfoot*/
  thead th,
  tfoot th {
    background: ${({ theme }): string => theme.primary.background.dark};
  }

  /* Padding */
  td,
  th {
    padding: ${({ theme }): string => theme.padding.normal};
  }
`

export const TabContent = styled.div<TabContentProps>`
  display: ${({ active }): string => ( !active ? 'block' : 'none')};
  grid-area: tables;
  overflow-x: auto;
  width: 100%;
`

export const FirstColumn = styled.th`
  border: 1px solid ${({ theme }): string => theme.border.secondary};
  text-align: justify;
`

export const Td = styled.td`
  border: 1px solid ${({ theme }): string => theme.border.secondary};
  text-align: center;
  white-space: pre-wrap;
`
