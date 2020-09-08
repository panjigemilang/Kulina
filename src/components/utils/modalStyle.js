import styled from "styled-components"
import { FontSize } from "../commons"

const Fixed = (props) => `
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
`

const ModalApp = styled.div`
  ${Fixed};
  border-radius: 8px 8px 0px 0px;
  box-shadow: rgba(10, 31, 68, 0.1) 0px 8px 10px 0px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  top: 100vh;
  z-index: 11;

  &.show {
    top: 120px;

    footer {
      bottom: 20px;
    }
  }

  footer {
    ${Fixed};
    background-color: transparent;
    bottom: -5em;
    text-align: center;
    top: unset;
  }
`

const Overlay = styled.div`
  ${Fixed};
  background-color: ${({ theme }) => theme.darkGray};
  opacity: 0;
  visibility: hidden;

  &.show {
    opacity: 0.5;
    visibility: visible;
  }
`

const P = styled.p`
  font-size: ${FontSize.md};
  margin: 0;
  opacity: 0.7;
`

const H3 = styled.h3`
  font-size: ${FontSize.xl};
  font-weight: 100;
  margin: 24px 0 0;
  width: 90%;
`

const InputContainer = styled.div`
  align-content: center;
  border: 1px solid rgb(241, 241, 242);
  display: flex;
  margin-top: 24px;
  padding: 8px;

  input {
    border: none;
    font-size: ${FontSize.md};
    margin-left: 16px;
    outline: none;
    width: 100%;
  }
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 55%;
  margin-top: 24px;
  overflow-y: scroll;
  visibility: hidden;

  &.show {
    visibility: visible;
  }
`
const List = styled.div`
  display: flex;
  margin: 16px 0px;
`

const Pin = styled.div`
  align-items: center;
  background-color: rgb(241, 241, 242);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  height: 40px;
  margin-right: 16px;
  min-width: 40px;
`

const Content = styled.div`
  h5 {
    margin: 0;
  }
`

export {
  ModalApp,
  Overlay,
  P,
  H3,
  InputContainer,
  ListContainer,
  List,
  Pin,
  Content,
}
