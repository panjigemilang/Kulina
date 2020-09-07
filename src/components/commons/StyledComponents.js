import styled from "styled-components"

const Theme = {
  primary: "#f9423a",
  secondary: "#a23530",
  darkGray: "#424749",
  gray: "#6e7679",
  lightGray: "#e2e4e4",
  light: "#f1f1f2",
}

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  width: 100%;
`

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

export { Theme, Container, Row }
