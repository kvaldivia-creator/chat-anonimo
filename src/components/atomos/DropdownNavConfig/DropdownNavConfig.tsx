import styled from "styled-components"
import { DropdownNavConfigI } from ".."

const ui = {
  DropdownContent: styled.div`
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  `,
  DropdownList: styled.ul`
    margin: 0;
    padding: 0;
  `
}

const DropdownNavConfig = ({ children }: DropdownNavConfigI) => {
  return (
    <>
      <ui.DropdownContent>
        <ui.DropdownList>
          { children }
        </ui.DropdownList>
      </ui.DropdownContent>
    </>
  )
}

export default DropdownNavConfig