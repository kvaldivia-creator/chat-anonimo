import styled from 'styled-components'
import { LayoutI } from '..'
import Header from '../Header'

const ui = {
  LayoutContent: styled.div`
    position: relative;
    //overflow-y: auto;
    padding-bottom: 15px;
    margin-top: 120px;
  `,
  LayoutMenu: styled.div`
    top: 0;
    right: 0;
    left: 0;
  `
}

const Layout = ({ children }: LayoutI) => {
  return (
    <>
      <ui.LayoutMenu>
        <Header />
      </ui.LayoutMenu>
      <ui.LayoutContent>
        { children }
      </ui.LayoutContent>
    </>
  )
}

export default Layout
