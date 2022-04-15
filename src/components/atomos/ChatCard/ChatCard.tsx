import styled from "styled-components"
import { ChatCardI } from ".."

const ui = {
  Card: styled.div`
    cursor: pointer;
  `,
  ChatContainer: styled.div`
    width: 100%;
    padding: 14px 20px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    :last-child{
      margin-right: 0;
    }
  `,
  Figure: styled.figure`
    margin: 0;
    max-width: 50px;
    max-height: 50px;
    position: relative;
    margin-right: 20px;
  `,
  Image: styled.img`
    border-radius: 12px;
    display: flex;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  ChatInformation: styled.div`
    width: 100%;
    border-bottom: 1px solid rgba();
  `,
  Name: styled.h2`
    width: 100%;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    margin: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `,
  Message: styled.p`
    margin: 0;
    font-family: Rubik;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    color: ${({theme}) => theme.colors.darkGrey};
  `
}

const ChatCard = ({ altAvatar, userName, src, textMessage, onClick }: ChatCardI) => {
  return (
    <>
      <ui.Card onClick={onClick}>
        <ui.ChatContainer>
          <ui.Figure>
            <ui.Image src={src} alt={altAvatar}/>
          </ui.Figure>
          <ui.ChatInformation>
            <ui.Name>{userName}</ui.Name>
            <ui.Message>{textMessage}</ui.Message>
          </ui.ChatInformation>
        </ui.ChatContainer>
      </ui.Card>
    </>
  )
}

export default ChatCard