import { TabList, TabPanels, Tabs } from '@chakra-ui/react'
import styled from 'styled-components'

export const MyTableWrapper = styled.div`
  background: yellow;
  display: flex;
`

export const MyTabs = styled(Tabs)`
  display: grid !important;
  grid-template-areas:
    'tabs'
    'tables';
  grid-template-columns: auto;
  grid-template-rows: 50px 1fr;
  width: 100%;
  height: 100%;
`
export const TabListStyled = styled(TabList)`
  grid-area: tabs;
  overflow-x: auto;
  background: #ffffff;
  padding-bottom: 2px;
  position: sticky !important;
  top: 0 !important;
`

export const TabPanelsStyled = styled(TabPanels)`
  grid-area: tables;
  overflow-x: auto;
  padding-top: 3px;
`

export const Badge = styled.div`
  font-size: 0.75rem;
  margin-left: 0.5rem;
  margin-top: -0.75rem;
`
