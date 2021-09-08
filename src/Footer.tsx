import { Flex, Square, Text } from '@chakra-ui/react'

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
          <Text>Copyright © {copyrightYears()}</Text>
        </Square>
      </Flex>
    </>
  )
}

export default Footer
