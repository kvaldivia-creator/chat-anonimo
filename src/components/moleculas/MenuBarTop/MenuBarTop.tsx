import styled from "styled-components"
import Button from "../../atomos/Button"
import Icon from "../../atomos/Icon"
import NavLinkTab from "../../atomos/NavLinkTag/NavLinkTag"
import DropdownNavConfig from '../../atomos/DropdownNavConfig'
import { useState } from "react"
import { getUser, userI } from "../../../services/user"
import { IconType } from "../../atomos"
import { useNavigate } from "react-router-dom"

interface MenuBarI {
  background?: string
  title?: string
  icon?: IconType
}

const ui = {
  NavTop: styled.nav<MenuBarI>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${({ background }) => background ? `background-color: ${background};` : ''};
  `,
  NavTopLeft: styled.div`
    display: flex;
    align-items: center;
  `,
  NavTopTitle: styled.h1`
    padding-left: 20px;
    margin: 0;
    color: ${({ theme}) => theme.colors.white};
  `,
  NavTopIcons: styled.div`
    display: flex;
  `,
  ButtonConfig: styled.div`
    position: relative;

    .text-end {
      text-align: end;
    }
  `,
}


const MenuBarTop = ({ background, title, icon }:MenuBarI ) => {
  const [visible, setVisible] = useState(false)
  const user: userI = getUser()
  let history = useNavigate()

  const handleToggle = () => {
    setVisible(!visible)
  }
  return (
    <>
      <ui.NavTop background={background}>
        <ui.NavTopLeft>
          { icon && 
            <Button onClick={() => history('/')}>
              <Icon style={{size: '24', color: '#fff'}} type="arrow-left" />
            </Button>
          }
          <ui.NavTopTitle>{title ? title : user.userName}</ui.NavTopTitle>
        </ui.NavTopLeft>
        <ui.NavTopIcons>
          <ui.ButtonConfig>
            <Button onClick={handleToggle}>
              <Icon style={{size: '24', color: '#fff'}} type="config" />
            </Button>
            {visible && 
              <DropdownNavConfig> 
                <NavLinkTab className="text-end" onClick={() => setVisible(false)} text='Configuración' href='/configuracion-profile' />
                <NavLinkTab className="text-end" onClick={() => setVisible(false)} text='Contactos' href='/lista-contactos' />
              </DropdownNavConfig>}
          </ui.ButtonConfig>
        </ui.NavTopIcons>
      </ui.NavTop>
    </>
  )
}

export default MenuBarTop