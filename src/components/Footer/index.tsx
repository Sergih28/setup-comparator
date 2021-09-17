import { ReactElement } from 'react'

import { Icon, Square } from '@chakra-ui/react'
import { GoMarkGithub } from 'react-icons/go'

import { copyrightYears } from './utils'

import { CopyrightProps, ImageFooterProps, VersionProps, WrapperProps } from './types'

import { author, version } from '../../../package.json'

import {
  Footer as MyFooter,
  WrapperCopyright,
  WrapperIcon,
  Wrapper as WrapperStyled,
  WrapperVersion,
} from './styles'

const Copyright = ({ years, author }: CopyrightProps): ReactElement => (
  <WrapperCopyright>
    Copyright © {years}, {author.name}
  </WrapperCopyright>
)

const Version = ({ version }: VersionProps): ReactElement => (
  <WrapperVersion
    href={`https://github.com/Sergih28/setup-comparator/releases/tag/v${version}`}
    isExternal
  >
    v{version}
  </WrapperVersion>
)

const ImageFooter = ({ image }: ImageFooterProps): ReactElement => (
  <WrapperIcon alt='Github Logo' href='https://github.com/Sergih28/setup-comparator' isExternal>
    <Icon as={image} />
  </WrapperIcon>
)

const Wrapper = ({ children }: WrapperProps): ReactElement => (
  <WrapperStyled color='white'>
    <Square bg='#FF3000' size='100%' p={3}>
      <MyFooter align='center'>{children}</MyFooter>
    </Square>
  </WrapperStyled>
)

const Footer = (): ReactElement => {
  return (
    <Wrapper>
      <Copyright years={copyrightYears()} author={author} />
      <Version version={version} />
      <ImageFooter image={GoMarkGithub} />
    </Wrapper>
  )
}

export default Footer
