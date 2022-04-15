import styled from 'styled-components'
import NavLinkTab from '../../atomos/NavLinkTag/NavLinkTag'

const ui = {
  Nav: styled.nav`
    position: sticky;
    top: 0;
    color: #fff;
    transition: transform 0.7s linear;
    box-shadow: 0 1px 1px 0 gray;
    display: flex;
    justify-content: space-evenly;
    background-color: ${({ theme }) => theme.colors.dark};
  `,
  NavList: styled.ul`
    width: 100%;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  `,
}

const MenuBarBottom = () => {
  return (
    <>
      <ui.Nav>
        <ui.NavList>
          <NavLinkTab text='Chats' href='/' />
          <NavLinkTab text='Grupos' href='/chats-grupales' />
        </ui.NavList>
      </ui.Nav>
    </>
  )
}

export default MenuBarBottom