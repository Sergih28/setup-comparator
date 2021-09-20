import { ThemeProps } from './types'

export const createTheme = (colors: ThemeProps): ThemeProps => ({
  color1: colors.color4,
  background1: colors.background1,
  background2: colors.background2,
  background3: colors.background3,
  background4: colors.background4,
  background5: colors.background5,
  hover1: colors.hover1,
  border1: colors.border1,
})
