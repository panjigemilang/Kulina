import React from "react"
import "./App.css"
import { Theme } from "./components/commons"
import { ThemeProvider } from "styled-components"

// Components
import Home from "./components/pages/Home"
import Header from "./components/layouts/Header"
import Menu from "./components/utils/Menu"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Header />
        <Menu />
        <Home />
      </ThemeProvider>
    </div>
  )
}

export default App
