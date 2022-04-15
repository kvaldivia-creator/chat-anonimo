
import { v4 as uuidv4 } from 'uuid'

export interface chatI {
  id: string
  users : []|[]
  messages: []|[]
  tipo: string
  category: string
}

const addChat = (tipo: string, category = null) => {
    const chat = {
        id: uuidv4(),
        users : [],
        messages: [],
        tipo,
        category
    }
    window.localStorage.setItem(chat.id, JSON.stringify(chat))
    saveChat(chat.id)

    return chat.id
}

const getChat = (uuid: string) => {
  const localStorageChat = localStorage.getItem(uuid)
  if (typeof localStorageChat === 'string') {
    const chat= JSON.parse(localStorageChat)
    return chat
  }
  return
}

const getChats = () => {
    const localStorageChats = localStorage.getItem('chats')
    if (typeof localStorageChats === 'string') {
      const chats = JSON.parse(localStorageChats)
      return chats
    }
}

const saveChat = (uuid: string | number) => {
    let chats = (getChats()) ? getChats() : []
    chats.push(uuid)
    updateChats(chats)
    return true
}

const updateChats = (chats: string) => {
    window.localStorage.setItem('chats', JSON.stringify(chats))
    return true
}

const updateChat = (chat: chatI) => {
    window.localStorage.setItem(chat.id, JSON.stringify(chat))
    return true
}

const addUserToChat = (uuidChat: string, uuidUser: string) => {
    let chat
    const getIdLocalStorageChat = localStorage.getItem(uuidChat)
    if (typeof getIdLocalStorageChat === 'string') {
      chat = JSON.parse(getIdLocalStorageChat)
    }
    let usersChat = chat.users
    usersChat.push(uuidUser)
    chat.users = usersChat
    updateChat(chat)
}

const findUserInChat = (idChat: string, idUser: string) => {
    const chat = getChat(idChat)

    if(chat?.users.find((user: string) => user === idUser)){
        return true
    }

    return null
}

const findChat = (idFriend: string, idUser: string) =>{
    const chats = getChats()
    let chatID

    if(!chats){
        return null
    }
    chats.forEach((element: string) => {
        const chat = getChat(element)

        if(chat?.tipo === 'unoauno' && chat.users.find((user: string) => user === idFriend) && chat.users.find((user: string) => user === idUser)){
            chatID = chat.id
        }
        
    })
    return chatID
}

const findChatsOfUser = (idUser: string, tipo = 'unoauno') => {
    const chats = getChats()

    let tmpchats: [] = []
    if(!chats){
        return null
    }

    chats.forEach((element: string) => {
        const chat = getChat(element)
        
        if (chat?.tipo === tipo && chat?.users.find((user: string) => user === idUser)){
          tmpchats.push(chat)
        }
        
    })
    return tmpchats
}

const findAllGroupChats = () => {
    const chats = getChats()

    let tmpchats: [] = []
    if(!chats){
        return null
    }

    chats.forEach((element: string) => {
        const chat = getChat(element)
        if(chat?.tipo === 'grupal'){
            tmpchats.push(chat)
        }
        
    })
    return tmpchats
} 

export {
  addChat,
  getChat,
  getChats,
  saveChat,
  updateChats,
  updateChat,
  addUserToChat,
  findUserInChat,
  findChat,
  findChatsOfUser,
  findAllGroupChats
}