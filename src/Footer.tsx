import { Flex, Square, Text } from '@chakra-ui/react'
import { version } from '../package.json'
import { Link } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { GoMarkGithub } from 'react-icons/go'

const Footer = () => {
  const copyrightYears = () => {
    const firstYear = new Date(new Date().setFullYear(2019, 3, 6)).getFullYear()
    const todayYear = new Date().getFullYear()
    if (firstYear !== todayYear) return ` ${firstYear} - ${todayYear}`
    return ` ${firstYear}`
  }

  return (
    <>
      <Flex color="white">
        <Square bg="#FF3000" size="100%" p={3}>
          <Text>
            Copyright © {copyrightYears()},{' '}
            <Link
              href={`https://github.com/Sergih28/setup-comparator/releases/tag/v${version}`}
              isExternal
            >
              v{version}
            </Link>{' '}
            <Link
              href="https://github.com/Sergih28/setup-comparator"
              isExternal
            >
              <Icon className="footer-icon" as={GoMarkGithub} />
            </Link>
          </Text>
        </Square>
      </Flex>
    </>
  )
}

export default Footer
