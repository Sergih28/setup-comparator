import { createTheme } from './utils'

import { SpacingProps, ThemeColorsProps } from './types'

const colors: string[] = [
  'hsl(0, 0%, 7%)',
  'hsl(0, 0%, 10%)',
  'hsl(0, 0%, 13%)',
  'hsl(0, 0%, 24%)',
  'hsl(0, 0%, 27%)',
  'hsl(0, 0%, 30%)',
  'hsl(0, 0%, 7%)',
  'hsl(0, 0%, 100%)',
]

const font_colors: string[] = ['hsl(0, 0%, 100%)', 'hsl(0, 0%, 90%)']

const border_colors: string[] = [
  'hsl(0, 0%, 30%)',
  'hsl(0, 0%, 60%)',
  '0rem -0.1rem 0.4rem hsla(0, 0%, 100%, 0.3)',
]

const spacings: SpacingProps = {
  narrow: '0.4rem',
  normal: '0.8rem',
  wide: '1.2rem',
}

//TODO: Make more spacings, for navbar and other places (font-size)

export const dark: ThemeColorsProps = createTheme(colors, font_colors, border_colors, spacings)
