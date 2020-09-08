import styled from "styled-components"

const Theme = {
  primary: "#f9423a",
  secondary: "#a23530",
  darkGray: "#424749",
  gray: "#6e7679",
  lightGray: "#e2e4e4",
  light: "#f1f1f2",
}

const FontSize = {
  xs: "8px",
  sm: "12px",
  md: "14px",
  lg: "16px",
  xl: "20px",
}

const Commons = {
  boxShadow: "0 8px 10px 0 rgba(10, 31, 68, 0.1)",
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
`

export { Theme, FontSize, Commons, Container, Row }
