import { ReactElement } from 'react'

import { FaBook, FaInfoCircle, FaMoon } from 'react-icons/fa'

import InputSetups from 'components/Navbar/InputSetups'

import { LeftSide, Logo, RightSide, Wrapper } from './styles'

import logo from 'assets/logo.png'

const Navbar = (): ReactElement => {
  //<FaBookOpen key={2} />,
  //<FaSun key={5} />,
  //TODO: Save Theme in local storage

  return (
    <Wrapper id='navbar'>
      <LeftSide>
        <Logo src={logo} alt='logo' />
      </LeftSide>
      <RightSide>
        <FaBook />
        <FaInfoCircle />
        <InputSetups />
        <FaMoon />
      </RightSide>
    </Wrapper>
  )
}

export default Navbar
