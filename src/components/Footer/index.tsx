import { ReactElement } from 'react'

import { GoMarkGithub } from 'react-icons/go'

import { copyrightYears } from './utils'

import { CopyrightProps, ImageFooterProps, VersionProps, WrapperProps } from './types'

import { author, version } from '../../../package.json'

import { WrapperCopyright, WrapperIcon, Wrapper as WrapperStyled, WrapperVersion } from './styles'

const Copyright = ({ years, author }: CopyrightProps): ReactElement => (
  <WrapperCopyright>
    Copyright © {years}, {author.name}
  </WrapperCopyright>
)

const Version = ({ version }: VersionProps): ReactElement => (
  <WrapperVersion
    href={`https://github.com/Sergih28/setup-comparator/releases/tag/v${version}`}
    target='_blank'
    rel='noopener noreferrer'
  >
    v{version}
  </WrapperVersion>
)

const ImageFooter = ({ Image }: ImageFooterProps): ReactElement => (
  <WrapperIcon
    href='https://github.com/Sergih28/setup-comparator'
    target='_blank'
    rel='noopener noreferrer'
  >
    <Image title='Github Repository' />
  </WrapperIcon>
)

const Wrapper = ({ children }: WrapperProps): ReactElement => (
  <WrapperStyled>{children}</WrapperStyled>
)

const Footer = (): ReactElement => {
  return (
    <Wrapper>
      <Copyright years={copyrightYears()} author={author} />
      <Version version={version} />
      <ImageFooter Image={GoMarkGithub} />
    </Wrapper>
  )
}

export default Footer
