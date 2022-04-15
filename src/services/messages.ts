import { v4 as uuidv4 } from 'uuid'
import { getChat, updateChat } from './chat'

const addMessage = (uuidChat: string, message: string, nickname: string) => {
    const tmpmessage = {
        id: uuidv4(),
        text: message,
        date: new Date().toISOString(),
        user: nickname
    }

    let chat = getChat(uuidChat)
    if (chat) {
        let messages = chat.messages
        messages.push(tmpmessage)
        chat.messages = messages
        updateChat(chat)
    }

    return tmpmessage
}

const hiddenMessage = (uuidChat: string, uuidMessage: string) => {
    let chat = getChat(uuidChat)
    const messages = (chat?.messages) ? chat.messages : []
    const index = messages.findIndex((msg: any) => msg.id === uuidMessage )

    chat.messages[index].hidden = true

    updateChat(chat)

    return chat.messages
}

export {
  addMessage,
  hiddenMessage
}