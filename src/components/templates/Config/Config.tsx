import styled from "styled-components"
import MenuBarTop from "../../moleculas/MenuBarTop"
import avatar from '../../../assets/avatar.png'
import InputField from "../../atomos/InputField"
import { editUser, getUser, userI } from "../../../services/user"
import Button from "../../atomos/Button"
import { ChangeEvent, ChangeEventHandler, useState } from "react"

const ui = {
  ConfigContainer: styled.section`
    width: 100%;
    max-width: 40%;
    margin: 0 auto;
    height: calc(100vh - 64px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    .input {
      border: 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.semiDarkGreen};
    }

    .button {
      margin: 20px auto;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.semiDarkGreen};
      color: white;
    }
  `,
  FigureImage: styled.figure`
    max-width: 200px;
    margin: 0 auto;
    max-height: 200px;
    margin-bottom: 40px;
  `,
  Image: styled.img`
    width: 100%;
  `,
  NameProfile: styled.h2`
    margin: 0;
    padding-bottom: 20px;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
    text-transform: uppercase;
  `,

}

const Config = () => {
  const [newName, setNewName] = useState('')
  const user: userI = getUser()

  const handleChangeName: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value)
  }
  
  const handleClickName = () => {
    editUser(newName)
    setNewName('')
  }

  return (
    <>
      <MenuBarTop icon="arrow-left" background='#212B32' title='Perfil' />
      <ui.ConfigContainer>
        <ui.NameProfile>{user.userName}</ui.NameProfile>
        <ui.FigureImage>
          <ui.Image src={avatar} />
        </ui.FigureImage>

        <InputField onChange={handleChangeName} valueInput={newName} textPlaceholder="Cambiar nombre..." classNameForContainer="input" iconPositionLeft iconInputLeft="user"  textLabel="Nombre" collapseLabel />
        <Button type="submit" classForButton="button" onClick={handleClickName}>
          Guardar Cambios
        </Button>
      </ui.ConfigContainer>
    </>
  )
}

export default Config