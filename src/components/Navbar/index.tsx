import { ReactElement } from 'react'

import { FaBook, FaInfoCircle, FaMoon, FaSun } from 'react-icons/fa'
import styled from 'styled-components'

import { useTheme } from 'hooks/Theme'
import { ThemeContextProps } from 'hooks/Theme/types'

import InputSetups from 'components/Navbar/InputSetups'

import { LeftSide, Logo, RightSide, Wrapper } from './styles'

import logo from 'assets/logo.png'

const Test = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }): string => {
    return theme.main
  }};
`

const Navbar = (): ReactElement => {
  //<FaBookOpen key={2} />,
  //<FaSun key={5} />,
  //TODO: Save Theme in local storage

  const { theme = 'light', toggleTheme } = useTheme()

  const ThemeIcon = ({ theme }: { theme: ThemeContextProps['theme'] }): ReactElement =>
    theme === 'light' ? <FaSun onClick={toggleTheme} /> : <FaMoon onClick={toggleTheme} />

  return (
    <Wrapper id='navbar'>
      <LeftSide>
        <Logo src={logo} alt='logo' />
        <Test />
      </LeftSide>
      <RightSide>
        <FaBook />
        <FaInfoCircle />
        <InputSetups />
        <ThemeIcon theme={theme} />
      </RightSide>
    </Wrapper>
  )
}

export default Navbar
