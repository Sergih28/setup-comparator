import { ThemeProps } from './types'

import { dark } from './themes/dark'
import { light } from './themes/light'

export const themes: { [key: string]: ThemeProps } = {
  light,
  dark,
}
