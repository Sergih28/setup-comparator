import { TabList, TabPanels, Tabs } from '@chakra-ui/react'
import styled from 'styled-components'

export const MyTableWrapper = styled.div`
  display: flex;
`

export const MyTabs = styled(Tabs)`
  display: grid !important;
  grid-template-areas:
    'tabs'
    'tables';
  grid-template-columns: auto;
  grid-template-rows: 50px 1fr;
  height: 100%;
  width: 100%;
`
export const TabListStyled = styled(TabList)`
  background: #ffffff;
  grid-area: tabs;
  overflow-x: auto;
  padding-bottom: 2px;
  position: sticky !important;
  top: 0 !important;
`

export const TabPanelsStyled = styled(TabPanels)`
  grid-area: tables;
  overflow-x: auto;
  padding-top: 3px;
`
