import styled from 'styled-components'

export const Darken = styled.div`
  position: fixed;
  z-index: 50;
  background: hsla(0, 0%, 0%, 0.6);
  width: 100vw;
  height: 100vh;
`

export const Modal = styled.div`
  position: fixed;
  top: 5%;
  left: 10%;
  width: 80%;
  height: 90%;
  background: hsl(100, 100%, 100%);
  z-index: 100;
`
