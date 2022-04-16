import { ChangeEvent, ChangeEventHandler, useState } from "react"
import styled from "styled-components"
import { addChat, addUserToChat, findAllGroupChats, findUserInChat } from "../../../services/chat"
import { getUser } from "../../../services/user"
import Button from "../../atomos/Button"
import ChatCard from "../../atomos/ChatCard"
import Icon from "../../atomos/Icon"
import Modal from "../../atomos/Modal"
import Layout from "../../organismos/Layout"
import avatarGroup from '../../../assets/avatar-group.png'

const ui = {
  ChatsGroupContainer: styled.section`
    position: relative;
    height: calc(100vh - 136px);
    .button-circle {
      background-color: ${({ theme }) => theme.colors.darkGreen};
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      right: 20px;
    }
    `,
  ButonsActionContent: styled.div`
    display: flex;
    justify-content: space-between;
    .button-action {
      width: 46%;
      height: 30px;
      margin-top: 20px;
      color: white;
      background-color: ${({ theme }) => theme.colors.darkGreen};
    }
  `,
  SelectedCategory: styled.select`
    width: 300px;
    margin: 0 auto;
    padding: 20px;
  `,
  OptionCategory: styled.option`
    padding: 12px;
  `,
  ModalContainer: styled.div`
    max-width: 500px;
    margin: auto;
  `,
  TextData: styled.p`
    text-align: center;
    margin: 0;
    padding-top: 30px;
  `
}

const ChatsGroup = () => {  
  const [activeModal, setActiveModal] = useState(false)
  const [valueCategory, setValueCategory] = useState<any>()
  
  const chats = findAllGroupChats()

  const handleChangeCategory: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValueCategory(event.target.value)
  }

  const handleCreate = () => {
    if (valueCategory !== '') {
        const uuidChat = addChat('grupal', valueCategory)
        addUserToChat(uuidChat, getUser().id)
        window.location.href = "/chat/" + uuidChat
    }
    setActiveModal(false)
  }
  
  return (
    <>
      <Layout>
        <ui.ChatsGroupContainer>
          {
            chats 
              ? chats.map((chat: any) => {
                function onClick(idChat: string) {
                  if (!findUserInChat(idChat, getUser().id)) {
                    addUserToChat(idChat, getUser().id);
                  }
    
                  window.location.href = '/chat/' + idChat;
                }

                return (
                  <ChatCard src={avatarGroup} textMessage='Grupo' key={chat.id} onClick={() => onClick(chat.id)} userName={chat.category} />
                )
              })
              : <ui.TextData>No hay grupos disponibles, crea uno.</ui.TextData>
          }
          <Button onClick={() => setActiveModal(true)} classForButton="button-circle">
            <Icon style={{size: '24', color: '#ffffff'}} type='users-group' />
          </Button>
          <Modal active={activeModal} onClick={() => setActiveModal(false)} >
            <ui.ModalContainer>
              <ui.SelectedCategory value={valueCategory} onChange={handleChangeCategory}>
                <label htmlFor="">Selecciona una categoria.</label>
                <ui.OptionCategory value='Juegos'>Juegos</ui.OptionCategory>
                <ui.OptionCategory value='Trabajos'>Trabajos</ui.OptionCategory>
                <ui.OptionCategory value='Universidad'>Universidad</ui.OptionCategory>
                <ui.OptionCategory value='Deporte'>Deporte</ui.OptionCategory>
                <ui.OptionCategory value='Salida'>Salida</ui.OptionCategory>
              </ui.SelectedCategory>
              <ui.ButonsActionContent>
                <Button classForButton="button-action" onClick={() => setActiveModal(false)}>
                  Cancelar
                </Button>
                <Button classForButton="button-action" onClick={handleCreate}>
                  Crear
                </Button>
              </ui.ButonsActionContent>
            </ui.ModalContainer>
          </Modal>
           </ui.ChatsGroupContainer>
      </Layout>
    </>
  )
}

export default ChatsGroup