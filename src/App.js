import React, { useState } from "react"
import "./App.css"
import { Theme } from "./components/commons"
import { ThemeProvider } from "styled-components"

// Components
import Home from "./components/pages/Home"
import Header from "./components/layouts/Header"
import Menu from "./components/utils/Menu"

function App() {
  const [startY, setstartY] = useState(0)
  const [distY, setdistY] = useState(0)

  const onTouchMove = (e) => {
    let touchobj = e.changedTouches[0]

    setdistY(touchobj.pageY - startY)
  }
  return (
    <div
      className="App"
      onTouchStart={(e) => setstartY(e.changedTouches[0].pageY)}
      onTouchMove={(e) => onTouchMove(e)}
    >
      <ThemeProvider theme={Theme}>
        <div className="header-container">
          <div className="header">
            <Header />
            <Menu distY={distY} />
          </div>
        </div>
        <Home />
      </ThemeProvider>
    </div>
  )
}

export default App
