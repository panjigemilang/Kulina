import styled from "styled-components"
import { FontSize } from "../commons"

const CardApp = styled.div`
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-radius: 10px;
  margin-bottom: 40px;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 264px;
    object-fit: cover;
    width: 100%;
  }
`

const Content = styled.div`
  padding: 16px 24px;

  button {
    align-items: center;
    background-color: ${({ theme }) => theme.primary};
    border: 0;
    border-radius: 5px;
    color: white;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    margin-left: auto;
    padding: 8px 24px;

    &:focus {
      outline: none;
    }
  }
`

const Title = styled.h3`
  font-size: ${FontSize.xl};
  margin: 8px 0px;
`

const P = styled.p`
  font-size: ${({ fontsize }) => (fontsize ? fontsize : FontSize.lg)};
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: 0;
  opacity: ${({ opacity }) => opacity};
`

export { CardApp, Content, Title, P }
