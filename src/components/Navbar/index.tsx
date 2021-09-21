import { ReactElement } from 'react'

import { FaBook, FaBookOpen, FaInfoCircle, FaMoon, FaSun } from 'react-icons/fa'

import { useModal } from 'hooks/Modal'
import { useSetup } from 'hooks/Setup'
import { useTheme } from 'hooks/Theme'
import { ThemeContextProps } from 'hooks/Theme/types'

import { SetupDifferencesIconProps } from './types'

import InputSetups from 'components/Navbar/InputSetups'

import { LeftSide, Logo, RightSide, Wrapper } from './styles'

import logo from 'assets/logo.png'

const Navbar = (): ReactElement => {
  //TODO: Save Theme in local storage
  const { setups, showOnlyDifferences = true as boolean, updateShowOnlyDifferences } = useSetup()
  const { theme = 'light', toggleTheme } = useTheme()
  const { toggleIsOpen } = useModal()

  const getSetupDifferencesIconElement = (
    showing_differences: boolean,
    onClick: () => void,
  ): ReactElement =>
    showing_differences ? (
      <FaBookOpen onClick={(): void => onClick()} />
    ) : (
      <FaBook onClick={(): void => onClick()} />
    )

  const SetupDifferencesIcon = ({
    n_setups,
    showing_differences,
    onClick,
  }: SetupDifferencesIconProps): ReactElement =>
    n_setups > 1 ? <>{getSetupDifferencesIconElement(showing_differences, onClick)}</> : <></>

  const ThemeIcon = ({ theme }: { theme: ThemeContextProps['theme'] }): ReactElement =>
    theme === 'dark' ? <FaSun onClick={toggleTheme} /> : <FaMoon onClick={toggleTheme} />

  return (
    <Wrapper id='navbar'>
      <LeftSide>
        <Logo src={logo} alt='logo' />
      </LeftSide>
      <RightSide>
        <SetupDifferencesIcon
          n_setups={setups?.length ?? 0}
          showing_differences={showOnlyDifferences}
          onClick={updateShowOnlyDifferences as () => void}
        />
        <FaInfoCircle onClick={toggleIsOpen} />
        <InputSetups />
        <ThemeIcon theme={theme} />
      </RightSide>
    </Wrapper>
  )
}

export default Navbar
