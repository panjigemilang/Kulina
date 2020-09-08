import styled from "styled-components"

const CardApp = styled.div`
  box-shadow: ${({ boxShadow }) => boxShadow};
  border-radius: 10px;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 264px;
    object-fit: cover;
    width: 100%;
  }
`

const Title = styled.h3`
  margin: 0;
`

export { CardApp, Title }
