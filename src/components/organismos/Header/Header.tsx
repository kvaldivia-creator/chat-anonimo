import styled from "styled-components"
import MenuBarBottom from "../../moleculas/MenuBarBottom"
import MenuBarTop from "../../moleculas/MenuBarTop"

const ui = {
  Header: styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    height: auto;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.dark};
    z-index: 10;
  `
}

const Header = () => {
  return (
    <>
      <ui.Header>
        <MenuBarTop />
        <MenuBarBottom />
      </ui.Header>
    </>
  )
}

export default Header