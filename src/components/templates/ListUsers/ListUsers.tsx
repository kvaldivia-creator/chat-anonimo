import styled from "styled-components"
import avatar from '../../../assets/avatar.png'
import { useSearch } from "../../../hook/useSearch"
import { addChat, addUserToChat, findChat } from "../../../services/chat"
import { getUser, getUsers, userI } from "../../../services/user"
import ChatCard from "../../atomos/ChatCard"
import InputField from "../../atomos/InputField"
import MenuBarTop from "../../moleculas/MenuBarTop"

const ui = {
  ListUserContainer: styled.section`
    .input-search {
      padding: 20px;
    }
  `,
  ListUsers: styled.div``
}

const ListUsers = () => {
  const getListUsers: [] = getUsers()
  const user: userI = getUser()

  const { searchValue, handleChangeSearchUser, serchedUser } = useSearch(getListUsers)

  const index = serchedUser.findIndex((p: any) => p.id === user.id);

  if(index > -1){
    serchedUser.splice(index, 1);    
  }
  
  return (
    <>
      <ui.ListUserContainer>
        <MenuBarTop icon='arrow-left' title='Contactos' background='#212b32' />
        <InputField valueInput={searchValue} onChange={handleChangeSearchUser} classNameForWrapper='input-search' iconInputLeft='search' iconPositionLeft textPlaceholder="Buscar..."/>
        <ui.ListUsers>
          {
            serchedUser.map((user: userI) => {
              function onClick (idFriend: string) {
                const emiter = getUser()
                const idChat = findChat(idFriend, emiter.id)
                if (idChat) {
                    window.location.href="/chat/"+idChat         
                    return
                }

                const uuidChat = addChat('unoauno')
                addUserToChat(uuidChat, emiter.id)
                addUserToChat(uuidChat, user.id)
                window.location.href="/chat/"+uuidChat
              }

            return (
              <ChatCard onClick={() => onClick(user.id)} key={user.id} userName={user.userName} src={avatar} />
            )
            })
          }
          
        </ui.ListUsers>
      </ui.ListUserContainer>
    </>
  )
}

export default ListUsers