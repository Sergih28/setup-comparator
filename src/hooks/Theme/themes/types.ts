interface CommonColorProps {
  alternate: string,
  main: string
}

interface ColorProps {
  dark: string
  light: string
  main: string
}

interface ColorNormalAlternateProps {
  alternate: string
  normal: string
}

interface FontColorProps {
  dark: ColorNormalAlternateProps
  light: ColorNormalAlternateProps
  main: ColorNormalAlternateProps
}

interface CompleteColorProps {
  background: ColorProps
  font: FontColorProps
}

interface BorderColorProps {
  primary: string
  secondary: string
  shadow: string
}

export interface SpacingProps {
  narrow: string
  normal: string
  wide: string
}

export interface ThemeColorsProps {
  border: BorderColorProps
  common: CommonColorProps
  margin: SpacingProps
  padding: SpacingProps
  primary: CompleteColorProps
  secondary: CompleteColorProps
}
