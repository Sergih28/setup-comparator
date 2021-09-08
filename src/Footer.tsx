import { ReactNode } from 'react'
import { Flex, Square, Text } from '@chakra-ui/react'
import { version } from '../package.json'
import { Link } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { GoMarkGithub } from 'react-icons/go'
import { ReactElement } from 'react'
import { IconType } from 'react-icons/lib'

const copyrightYears = (): string => {
  const firstYear = new Date(new Date().setFullYear(2019, 3, 6)).getFullYear()
  const todayYear = new Date().getFullYear()
  if (firstYear !== todayYear) return ` ${firstYear} - ${todayYear}`
  return ` ${firstYear}`
}

interface CopyrightProps {
  years: string
}

const Copyright = ({ years }: CopyrightProps): ReactElement => (
  <span className="footer-copyright">Copyright © {years}</span>
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
      <Text>{children}</Text>
    </Square>
  </Flex>
)

const Footer = (): ReactElement => (
  <Wrapper>
    <Copyright years={copyrightYears()} />
    <Version version={version} />
    <ImageFooter image={GoMarkGithub} />
  </Wrapper>
)

export default Footer
