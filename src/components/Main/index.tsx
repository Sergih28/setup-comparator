import { ReactElement, ReactNode } from 'react'

import Tabs from 'components/Tabs'
//import Table from 'components/Table'

import { MyContentWrapper, Wrapper } from './styles'

const ContentWrapper = ({ children }: { children: ReactNode }): ReactElement => (
  <MyContentWrapper>{children}</MyContentWrapper>
)

const Main = (): ReactElement => (
  <Wrapper>
    <ContentWrapper>
      <Tabs />
    </ContentWrapper>
  </Wrapper>
)

//<Table />
export default Main
