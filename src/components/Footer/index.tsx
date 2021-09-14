import { ReactElement, useEffect, useState } from 'react'

import { Flex, Icon, Link, Slide, Square, Text } from '@chakra-ui/react'
import { GoMarkGithub } from 'react-icons/go'

import { copyrightYears } from './utils'

import { CopyrightProps, ImageFooterProps, VersionProps, WrapperProps } from './types'

import { author, version } from '../../../package.json'

const Copyright = ({ years, author }: CopyrightProps): ReactElement => (
  <span className='footer-copyright'>
    Copyright © {years}, {author.name}
  </span>
)

const Version = ({ version }: VersionProps): ReactElement => (
  <Link
    href={`https://github.com/Sergih28/setup-comparator/releases/tag/v${version}`}
    isExternal
    className='footer-version'
  >
    v{version}
  </Link>
)

const ImageFooter = ({ image }: ImageFooterProps): ReactElement => (
  <Link href='https://github.com/Sergih28/setup-comparator' isExternal>
    <Icon className='footer-icon' as={image} />
  </Link>
)

const Wrapper = ({ children }: WrapperProps): ReactElement => (
  <Flex color='white'>
    <Square bg='#FF3000' size='100%' p={3}>
      <Text className='footer'>{children}</Text>
    </Square>
  </Flex>
)

const Footer = (): ReactElement => {
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <Slide direction='bottom' in={show} id='footer'>
      <Wrapper>
        <Copyright years={copyrightYears()} author={author} />
        <Version version={version} />
        <ImageFooter image={GoMarkGithub} />
      </Wrapper>
    </Slide>
  )
}

export default Footer
