import styled from "styled-components"

const TimelineApp = styled.div`
  display: flex;
  margin-top: 8px;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;

  button {
    background-color: white;
    border: 0;
    border-radius: 50%;
    color: ${({ theme }) => theme.darkGray};
    cursor: pointer;
    height: 48px;
    margin-right: 8px;
    min-width: 48px;

    &:disabled {
      opacity: 0.2;
    }

    &:focus {
      outline: none;
    }

    &.active {
      background-color: ${({ theme }) => theme.darkGray};
      color: white;
    }
  }
`

const P = styled.p`
  font-size: ${({ fontsize }) => fontsize};
  margin: 0;
`

export { TimelineApp, P }
