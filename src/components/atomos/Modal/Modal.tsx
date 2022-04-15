import styled from 'styled-components'
import Portal from '../Portal'
import { ModalI } from '..'

const ui = {
  Overlay: styled.div<ModalI>`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    background: rgba(0, 0, 0, .4);
    justify-content: center;
    animation: opacity-overlay 300ms ease-out;
    
    @keyframes opacity-overlay {
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }
  `,
  ContainerModal: styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    position: relative;
    overflow: hidden; 
    z-index: 100;
    max-height: 100%;
  `,
  CloseModal: styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
  `
}

const Modal = ({ children, onClick, active }: ModalI) => {
  return (
    <Portal>
      {
        active &&
        <>
          <ui.Overlay>
            <ui.ContainerModal>
                {children}
              </ui.ContainerModal>
            <ui.CloseModal onClick={onClick} />
          </ui.Overlay>
        </>
      }
    </Portal>
  )
}

export default Modal
