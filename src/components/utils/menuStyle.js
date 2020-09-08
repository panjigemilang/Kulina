import styled from "styled-components"
import { Commons, FontSize } from "../commons"

const MenuApp = styled.div`
  box-shadow: ${Commons.boxShadow};
  padding: 8px 24px;
`

const Button = styled.button`
  background-color: white;
  border: 1px ${({ theme }) => theme.lightGray} solid;
  color: ${({ theme }) => theme.gray};
  font-size: ${FontSize.lg};
  height: 40px;
  padding: 2px 16px;
  width: 50%;

  &.left {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &.right {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &.active {
    background-color: ${({ theme }) => theme.darkGray};
    border: 0;
    color: whitesmoke;
  }

  &:focus {
    outline: none;
  }
`

export { MenuApp, Button }
