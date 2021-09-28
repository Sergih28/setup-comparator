import { SpacingProps, ThemeColorsProps } from './types'

export const createTheme = (
  colors: string[],
  font_colors: string[],
  border_colors: string[],
  spacings: SpacingProps,
): ThemeColorsProps => ({
  common: {
    main: colors[6],
    alternate: colors[7],
  },
  primary: {
    background: {
      dark: colors[0],
      main: colors[1],
      light: colors[2],
    },
    font: {
      light: {
        normal: font_colors[0],
        alternate: font_colors[1],
      },
      main: {
        normal: font_colors[0],
        alternate: font_colors[1],
      },
      dark: {
        normal: font_colors[0],
        alternate: font_colors[1],
      },
    },
  },
  secondary: {
    background: {
      dark: colors[3],
      main: colors[4],
      light: colors[5],
    },
    font: {
      light: {
        normal: font_colors[2],
        alternate: font_colors[3],
      },
      main: {
        normal: font_colors[2],
        alternate: font_colors[3],
      },
      dark: {
        normal: font_colors[2],
        alternate: font_colors[3],
      },
    },
  },
  border: {
    primary: border_colors[0],
    secondary: border_colors[1],
    shadow: border_colors[2],
  },
  margin: {
    narrow: spacings.narrow,
    normal: spacings.normal,
    wide: spacings.wide,
  },
  padding: {
    narrow: spacings.narrow,
    normal: spacings.normal,
    wide: spacings.wide,
  },
})
