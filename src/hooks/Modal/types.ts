import { ReactNode } from 'react'

export interface ModalProps {
  children: ReactNode
}

export interface ModalContextProps {
  content: unknown
  isOpen: boolean
  toggleIsOpen: () => void
  updateContent: (new_content: string[]) => void
}
