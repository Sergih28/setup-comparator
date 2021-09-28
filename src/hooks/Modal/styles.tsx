import styled from 'styled-components'

export const ModalWrapper = styled.div`
  align-items: center;
  background: hsla(0, 0%, 0%, 0.6);
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: auto;
  position: fixed;
  width: 100%;
  z-index: 100;
`

export const Modal = styled.div`
  background: ${({ theme }): string => theme.secondary.background.dark};
  color: ${({ theme }): string => theme.secondary.font.dark.alternate};
  height: calc(95% - ${({ theme }): string => `${theme.padding.wide} - ${theme.padding.wide}`});
  overflow: auto;
  padding: ${({ theme }): string => theme.padding.wide};
  width: calc(80% - ${({ theme }): string => `${theme.padding.wide} - ${theme.padding.wide}`});
  z-index: 100;
`
