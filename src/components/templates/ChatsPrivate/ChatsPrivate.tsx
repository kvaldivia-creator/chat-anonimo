import { ChangeEvent, ChangeEventHandler, useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { useBroadcastChannel } from "../../../hook/useBroadcastChannel"
import { getChat } from "../../../services/chat"
import { addMessage, hiddenMessage } from "../../../services/messages"
import { findUsers, getUser, userI } from "../../../services/user"
import Button from "../../atomos/Button"
import Icon from "../../atomos/Icon"
import InputField from "../../atomos/InputField"
import MenuBarTop from "../../moleculas/MenuBarTop"

const ui = {
  ChatWrapper: styled.main`
    height: 100vh;
    display: grid;
    grid-template-rows: 10% 82% auto;
  `,
  ChatsPrivateContainer: styled.section`
    width: 100%;
    height: auto;
    position: relative;
  `,
  SendMessage: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: ${({ theme }) => theme.colors.darkGreen};

    .input-field {
      border: none;
      border-radius: 0;
      &:focus-within {
        background-color: transparent;
        border-color: 1px solid #000000;
      }
    }
    
    .input-wrapper {
      width: 100%;
      border-radius: 0;
      background-color: ${({ theme }) => theme.colors.darkGreen};
    }

    .input {
      color: white;
      &::placeholder {
        color: white;
      }
    }

    .button-send {
      position: absolute;
      padding: 12px;
      right: 0;
    }
  `,
  MessageContainer: styled.article`
    height: 100%;
    overflow-y: auto;
    padding: 20px;
    margin-bottom: 60px;
    background-color: ${({ theme }) => theme.colors.backgroundChat};
  `,
  ChatBox: styled.div`
    position: relative;
    width: 100%;

    .my-message {
      float: right;
      width: 100%;
      display: flex;
      justify-content: start;

        .text-message {
          background-color: ${({ theme }) => theme.colors.dark};
          ::before {
          left: -12px;
          background: linear-gradient(223deg, #212B32 0%, #212B32 50%, transparent 50%, transparent)
        }
      }
    }
  `,
  Message: styled.div`
    display: flex;
    justify-content: end;
    float: left;
    width: 100%;
    p {
      position: relative;
      right: 0;
      justify-content: flex-start;
      text-align: right;
      max-width: 65%;
      padding: 12px;
      background-color: ${({ theme }) => theme.colors.darkGreen};
      border-radius: 10px;
      color: white;
      font-size: .9em;

      ::before {
        content: '';
        position: absolute;
        top: 0;
        right: -12px;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, #075E54 0%, #075E54 50%, transparent 50%, transparent)
      }

      span {
        display: block;
        margin-top: 5px;
        font-size: .85em;
        opacity: .5;
      }
    }
  `
}

const ChatsPrvate = () => {
  const { id } = useParams()
  const broadcast: any = useBroadcastChannel(id!)
  const chat = getChat(id!)
  
  const [ message, setMessage ] = useState('')
  const [ messages, setMessages ] = useState(chat.messages)
  const user: userI = getUser()
	const uuidFriend = chat.users.find((idUser: string) => idUser !== window.sessionStorage.getItem('Id'))
	const friend = uuidFriend ? findUsers(uuidFriend) : { userName: '' }
  
  const handleBroadcast = useCallback(
		(e: any) => {
			setMessages([ ...messages, e.data ])
		},
		[ messages ]
	)

  useEffect(
		() => {
			if (broadcast) {
				broadcast.onmessage = handleBroadcast
			}
		},
		[ broadcast, handleBroadcast ]
	)

  const handleChangeMessage: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  function handleSend() {
		const tmpmsg = addMessage(id!, message, user.userName);
		broadcast.postMessage(tmpmsg)
		setMessages([ ...messages, tmpmsg ])
		setMessage('')
	}

	function hiddenToogleMessage (idMessage: string) {
		const messages = hiddenMessage(id!, idMessage)
		setMessages(messages)
	}
  
  return (
    <>
      <ui.ChatWrapper>
        <MenuBarTop icon='arrow-left' title={chat.category ? `Grupo_${chat.category}` : friend.userName} background='#212b32' />
        <ui.ChatsPrivateContainer>
          <ui.MessageContainer>
            {
              messages.map((msg: any) =>{
                if (msg.user === user.userName && msg.hidden === true) {
                  return ''
                }

                if (msg.user === user.userName) {
                  return (
                    <>
                      <ui.ChatBox>
                        <ui.Message>
                          <p>
                            {msg.text} <br />
                            <span>{msg.date}</span>
                          </p>
                        <Button onClick={() => hiddenToogleMessage(msg.id)}>
                          <Icon type="delete" style={{size: '24'}} />
                        </Button>
                        </ui.Message>
                      </ui.ChatBox>
                    </>
                  )
                }

                return (
                  <ui.ChatBox key={msg.id} >
                    <ui.Message className="my-message">
                      <p className="text-message">
                        {msg.text} <br />
                        <span>{msg.date}</span>
                      </p>	
                    </ui.Message>
                  </ui.ChatBox>
                )
              })
            }
          </ui.MessageContainer>
        </ui.ChatsPrivateContainer>
        <ui.SendMessage>
          <InputField valueInput={message} onChange={handleChangeMessage} classNameForInput="input" classNameForWrapper="input-wrapper" classNameForContainer="input-field" textPlaceholder="Enviar un mensaje..." />
          <Button classForButton="button-send" onClick={handleSend}>
            <Icon className="icon-send" style={{ size: '24', color: '#ffffff'}} type="send-message" />
          </Button>
        </ui.SendMessage>
      </ui.ChatWrapper>
    </>
  )
}

export default ChatsPrvate