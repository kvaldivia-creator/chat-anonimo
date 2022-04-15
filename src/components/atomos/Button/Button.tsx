import styled from "styled-components"
import { ButtonI } from ".."
import Icon from "../Icon"

const ui = {
  Button: styled.button<ButtonI>`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: transparent;
    outline: none;
    border: none;

    ${({ circle }) =>
      circle
        ? `
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border-radius: 50%;
          background: #ffffff;
        `
        : 'border-radius: 8px;'
    }
  `,
  ButtonContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  `
}

const Button = ({ onClick, children, icon, classForButton, classForContent, circle = false }: ButtonI) => {
  return (
    <>
      <ui.Button onClick={onClick} className={classForButton} circle={circle}>
        {icon && <Icon type={icon} />}
        <ui.ButtonContainer className={classForContent}>
          {children}
        </ui.ButtonContainer>
      </ui.Button>
    </>
  )
}

export default Button