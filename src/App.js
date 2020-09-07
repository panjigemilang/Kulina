import React from "react"
import "./App.css"
import { Theme } from "./components/commons"
import { ThemeProvider } from "styled-components"

// Components
import Home from "./components/pages/Home"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </div>
  )
}

export default App
