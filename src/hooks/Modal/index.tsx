import { createContext, ReactElement, useContext, useEffect, useRef, useState } from 'react'

import ReactMarkdown from 'react-markdown'

import useReadTextFile from 'hooks/ReadTextFile'

import { ModalContextProps, ModalProps } from './types'

import { Modal, ModalWrapper } from './styles'

import info from 'assets/info.md'

const ModalContext = createContext<Partial<ModalContextProps>>({})

export const useModal = (): Partial<ModalContextProps> => useContext(ModalContext)

export const ModalProvider = ({ children }: ModalProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { content, updateContent } = useReadTextFile()
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    updateContent(info)
  }, [])

  // handle click outside modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      wrapperRef.current && !wrapperRef.current.contains(event.target as Node) && toggleIsOpen()
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return (): void => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const toggleIsOpen = (): void => {
    isOpen ? (document.body.style.overflow = 'auto') : (document.body.style.overflow = 'hidden')

    setIsOpen((old_state: boolean) => !old_state)
  }

  const values = { isOpen, content, toggleIsOpen, updateContent }

  return (
    <ModalContext.Provider value={values}>
      {isOpen && (
        <>
          <ModalWrapper>
            <Modal ref={wrapperRef}>
              <ReactMarkdown>{content}</ReactMarkdown>
            </Modal>
          </ModalWrapper>
        </>
      )}
      {children}
    </ModalContext.Provider>
  )
}
