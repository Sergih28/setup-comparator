import { useState, useEffect, ReactNode } from 'react'
import { Flex, Square, Text } from '@chakra-ui/react'
import { version, author } from '../package.json'
import { Link } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { GoMarkGithub } from 'react-icons/go'
import { ReactElement } from 'react'
import { IconType } from 'react-icons/lib'
import { Slide } from '@chakra-ui/react'

const copyrightYears = (): string => {
  const first_year = new Date(new Date().setFullYear(2019, 3, 6)).getFullYear()
  const today_year = new Date().getFullYear()
  if (first_year !== today_year) return `${first_year} - ${today_year}`
  return `${first_year}`
}

interface CopyrightProps {
  years: string
  author: { name: string }
}

const Copyright = ({ years, author }: CopyrightProps): ReactElement => (
  <span className="footer-copyright">
    Copyright © {years}, {author.name}
  </span>
)

interface VersionProps {
  version: string
}

const Version = ({ version }: VersionProps): ReactElement => (
  <Link
    href={`https://github.com/Sergih28/setup-comparator/releases/tag/v${version}`}
    isExternal
    className="footer-version"
  >
    v{version}
  </Link>
)

interface ImageFooterProps {
  image: IconType
}

const ImageFooter = ({ image }: ImageFooterProps): ReactElement => (
  <Link href="https://github.com/Sergih28/setup-comparator" isExternal>
    <Icon className="footer-icon" as={image} />
  </Link>
)

interface WrapperProps {
  children: ReactNode
}

const Wrapper = ({ children }: WrapperProps): ReactElement => (
  <Flex color="white">
    <Square bg="#FF3000" size="100%" p={3}>
      <Text className="footer">{children}</Text>
    </Square>
  </Flex>
)

const Footer = (): ReactElement => {
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    setShow(true)
  }, [])

  return (
    <Slide direction="bottom" in={show} id="footer">
      <Wrapper>
        <Copyright years={copyrightYears()} author={author} />
        <Version version={version} />
        <ImageFooter image={GoMarkGithub} />
      </Wrapper>
    </Slide>
  )
}

export default Footer
