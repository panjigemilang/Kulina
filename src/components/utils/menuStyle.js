import styled from "styled-components"
import { Commons, FontSize } from "../commons"

const MenuApp = styled.div`
  background-color: white;
  box-shadow: ${Commons.boxShadow};
  padding: 8px 24px;
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transform: translateY(0);
  -moz-transform: translateY(0);
  -ms-transform: translateY(0);
  -o-transform: translateY(0);
  z-index: -1;

  &.up {
    transform: translateY(-5em);
    -moz-transform: translateY(-5em);
    -ms-transform: translateY(-5em);
    -o-transform: translateY(-5em);
  }
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
