import styled from 'styled-components'

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow: auto;
  background: hsla(0, 0%, 0%, 0.6);
`

export const Modal = styled.div`
  width: calc(85% - ${({ theme }): string => `${theme.padding1} - ${theme.padding1}`});
  height: calc(95% - ${({ theme }): string => `${theme.padding1} - ${theme.padding1}`});
  background: hsl(100, 100%, 100%);
  z-index: 100;
  overflow: auto;
  padding: ${({ theme }): string => theme.padding1};
`
