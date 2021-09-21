import { createContext, ReactElement, useContext, useEffect, useState } from 'react'

import { ModalContextProps, ModalProps } from './types'

import { Darken, Modal } from './styles'

const ModalContext = createContext<Partial<ModalContextProps>>({})

export const useModal = (): Partial<ModalContextProps> => useContext(ModalContext)

export const ModalProvider = ({ children }: ModalProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    setContent('hello updated content')
  }, [])

  const toggleIsOpen = (): void => {
    setIsOpen((old_state: boolean) => !old_state)
  }

  const updateContent = (new_content: string): void => {
    setContent(new_content)
  }

  const values = { isOpen, content, toggleIsOpen, updateContent }

  return (
    <ModalContext.Provider value={values}>
      {isOpen && (
        <>
          <Darken onClick={toggleIsOpen} />
          <Modal>{content}</Modal>
        </>
      )}
      {children}
    </ModalContext.Provider>
  )
}
