import styled from "styled-components"

const TimelineApp = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;

  button {
    /* background-color: white; */
    background-color: ${({ theme }) => theme.darkGray};
    border: 0;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    height: 50px;
    margin-right: 8px;
    width: 50px;

    /* &.active {
        background
    } */
  }
`

const P = styled.p`
  font-size: ${({ fontsize }) => fontsize};
  margin: 0;
`

export { TimelineApp, P }
