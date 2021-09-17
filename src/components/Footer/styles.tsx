import { Flex, Link, Text } from '@chakra-ui/react'
import styled from 'styled-components'

export const Footer = styled(Text)`
  font-size: 0.9rem;
`

export const Wrapper = styled(Flex)`
  grid-area: footer;
`

export const WrapperCopyright = styled.span`
  margin-right: 0.4rem;
`

export const WrapperVersion = styled(Link)`
  margin-right: 0.3rem;
`

export const WrapperIcon = styled(Link)`
  svg {
    margin-bottom: 0.2rem;

    :hover {
      color: #02c3ee;
    }
  }
`
