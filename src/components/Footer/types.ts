import { ReactNode } from 'react'

import { IconType } from 'react-icons/lib'

export interface WrapperProps {
  children: ReactNode
}

export interface CopyrightProps {
  author: { name: string }
  years: string
}

export interface VersionProps {
  version: string
}

export interface ImageFooterProps {
  Image: IconType
}
