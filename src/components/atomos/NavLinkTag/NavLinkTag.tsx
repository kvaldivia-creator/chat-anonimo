import React from 'react'
import styled from 'styled-components'
import { NavLinkI } from '..'
import { NavLink } from 'react-router-dom'

const ui = {
  NavItem: styled.li`
    display: block;
    position: relative;
    width: 100%;
    text-align: center; 
    `,
  NavLink: styled(NavLink)`
    display: inline-block;
    width: 100%;
    padding: 20px 22px 15px 22px;
  `
}

const NavLinkTab = ({ href, text, onClick, className }: NavLinkI) => {
  return (
    <>
      <ui.NavItem>
        <ui.NavLink onClick={onClick} to={href}>
          <span className={className}>{text}</span>
        </ui.NavLink>
      </ui.NavItem>
    </>
  )
}

export default NavLinkTab