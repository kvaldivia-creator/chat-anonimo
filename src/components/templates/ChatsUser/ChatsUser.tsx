import ChatCard from "../../atomos/ChatCard"
import avatar from '../../../assets/avatar.png'
import styled from "styled-components"
import InputField from "../../atomos/InputField"
import Layout from "../../organismos/Layout"
import { getUser, getUsers, userI } from "../../../services/user"
import { addChat, addUserToChat, findChat, getChats } from "../../../services/chat"
import { useSearch } from "../../../hook/useSearch"

const ui = {
  HomeContainer: styled.section`
    height: auto;
  `,
  InputSearch: styled.div`
    padding: 20px;
  ` 
}

const Home = () => {
  const messages = getChats()
  let getListUsers: []
  if (messages !== undefined) {
    getListUsers = getUsers()
  } else {
    getListUsers = []
  }
  const { searchValue, handleChangeSearchUser, serchedUser} = useSearch(getListUsers)
  
  const user: userI = getUser()

  const index = serchedUser.findIndex((p: any) => p.id === user.id);

  if(index > -1){
    serchedUser.splice(index, 1);    
  }

  return (
    <>
      <Layout>
        <ui.HomeContainer>
          <ui.InputSearch>
            <InputField valueInput={searchValue} onChange={handleChangeSearchUser} iconInputLeft='search' iconPositionLeft textPlaceholder="Buscar..."/>
          </ui.InputSearch>
          
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
        </ui.HomeContainer>
      </Layout>
    </>
  )
}

export default Home