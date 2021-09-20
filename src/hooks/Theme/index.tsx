import { createContext, ReactElement, useContext, useState } from 'react'

import { ThemeProvider as ThemeProviderSC } from 'styled-components'

import { themes } from './assets'

import { ThemeContextProps, ThemeProviderProps } from './types'

const ThemeContext = createContext<Partial<ThemeContextProps>>({})

export const useTheme = (): Partial<ThemeContextProps> => useContext(ThemeContext)

export const ThemeProvider = ({ children }: ThemeProviderProps): ReactElement => {
  const [theme, setTheme] = useState<string>('dark')
  const toggleTheme = (): void => {
    setTheme((old_theme: string) => (old_theme === 'light' ? 'dark' : 'light'))
  }
  const values = { theme, toggleTheme }
  return (
    <ThemeContext.Provider value={values}>
      <ThemeProviderSC theme={themes[theme]}>{children}</ThemeProviderSC>
    </ThemeContext.Provider>
  )
}
