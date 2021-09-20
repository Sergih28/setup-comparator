import { ReactNode } from 'react'

export interface ThemeContextProps {
  theme: string
  toggleTheme: () => void
}

export interface ThemeProviderProps {
  children: ReactNode
}

export interface ThemeProps {
  [key: string]: string
}
