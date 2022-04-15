import { ChangeEvent, ChangeEventHandler, SyntheticEvent, useState } from 'react'
import styled from 'styled-components'
import Button from '../../atomos/Button'
import InputField from '../../atomos/InputField'
import Title from '../../atomos/Title'
import { generatedIdUser } from '../../../utils/generatedId'
import { Navigate } from 'react-router-dom'
import { addUser, getUser } from '../../../services/user'

const ui = {
  Page: styled.div`
    width: 100%;
    max-width: 40%;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #f2f7f4;
  `,

  Container: styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  `,

  H1: styled(Title)`
    margin-bottom: 12px;
    font-size: 32px;
    line-height: 36px;
    text-align: center;
  `,
  Description: styled.p`
    font-size: 16px;
    margin: 0 32px 32px;
    font-family: Rubik;
    text-align: center;
  `,
  FormContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;

    .button-content {
      color: white;
      margin: 0 auto;
      font-size: 16px;
      padding: 12px 20px;
      background-color: ${({ theme }) => theme.colors.semiDarkGreen};
    }
  `,
  InputField: styled(InputField)`
    width: 100%;
  `,
  Social: styled.div`
    margin: 8px 0;
  `,
  Form: styled.form`
    margin: 40px 0;
  `,
  More: styled.div`
    margin: 36px 0;
    text-align: center;
  `
}

const SignIn = () => {
  const [userName, setUserName] = useState('')
  const id = generatedIdUser()

  const handleChangeUserName: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault()
    const newUser = {id, userName}
    addUser(newUser)
    window.location.href = '/chats-usuarios'
  }

  if (getUser()) {
    return <Navigate to='/chats-usuarios' />
  }

  return (
    <>
      <ui.Page>
        <ui.Container>
          <ui.H1>Iniciar sesión</ui.H1>

          <ui.Form onSubmit={handleSubmit}>
            <ui.FormContainer>
              <ui.InputField
                idInput="userName"
                textLabel="User name"
                typeInput="text"
                textPlaceholder="Pedro"
                collapseLabel
                valueInput={userName}
                onChange={handleChangeUserName}
              />
            </ui.FormContainer>
            <ui.FormContainer>
              <Button
                classForButton='button-content'
              >
                Iniciar sesión
              </Button>
            </ui.FormContainer>
          </ui.Form>
        </ui.Container>
      </ui.Page>
    </>
  )
}

export default SignIn
