import styled from "styled-components"
import { FontSize } from "../commons"

const CartApp = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  display: flex;
  margin: 16px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: -6em;
  transition: 0.3s ease-in-out;
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  z-index: 5;

  &.show {
    bottom: 0;
  }
`

const Content = styled.div`
  color: white;
  display: flex;
  padding: 16px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
  }

  a {
    align-items: center;
    margin: auto 0 auto auto;
  }
`

const P = styled.p`
  display: inline;
  font-size: ${({ fontsize }) => (fontsize ? fontsize : FontSize.lg)};
  font-weight: ${({ fontweight }) => fontweight};
  margin: 0;
`

const TransparentBg = styled.div`
  background: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255));
  bottom: 0;
  height: 5%;
  position: fixed;
  left: 0px;
  right: 0px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 1;

  &.show {
    opacity: 0.7;
  }
`

export { CartApp, Content, P, TransparentBg }
