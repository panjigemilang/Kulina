import styled from "styled-components"

const HeaderApp = styled.div`
  border-bottom: 1px ${({ theme }) => theme.lightGray} solid;
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  width: 100%;
`

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
`

const Location = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  width: 100%;
`

const P = styled.p`
  font-size: ${({ fontsize }) => fontsize};
  margin: 0;
`

export { HeaderApp, HeaderContent, Location, P }
