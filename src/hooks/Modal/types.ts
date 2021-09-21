import { ReactNode } from 'react'

export interface ModalProps {
  children: ReactNode
}

export interface ModalContextProps {
  content: string
  isOpen: boolean
  toggleIsOpen: () => void
  updateContent: (new_content: string) => void
}
