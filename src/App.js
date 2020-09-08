import React, { useState, useMemo } from "react"
import "./App.css"
import { Theme } from "./components/commons"
import { ThemeProvider } from "styled-components"
import { Context } from "./context"

// Components
import Home from "./components/pages/Home"
import Header from "./components/layouts/Header"
import Menu from "./components/utils/Menu"
import Cart from "./components/utils/Cart"

function App() {
  const [startY, setstartY] = useState(0)
  const [distY, setdistY] = useState(0)
  const [cartShow, setcartShow] = useState(false)
  const [locationShow, setlocationShow] = useState(false)
  const contextProvider = useMemo(
    () => ({
      cartShow,
      setcartShow,
      locationShow,
      setlocationShow,
    }),
    [cartShow, setcartShow, locationShow, setlocationShow]
  )

  const onTouchMove = (e) => {
    let touchobj = e.changedTouches[0]

    setdistY(touchobj.pageY - startY)
  }

  return (
    <div
      className="App"
      onTouchStart={(e) => setstartY(e.changedTouches[0].pageY)}
      onTouchMove={onTouchMove}
    >
      <Context.Provider value={contextProvider}>
        <ThemeProvider theme={Theme}>
          <div className="header-container">
            <div className="header">
              <Header />
              <Menu distY={distY} />
            </div>
          </div>
          <Home setdistY={setdistY} />
          <Cart />
        </ThemeProvider>
      </Context.Provider>
    </div>
  )
}

export default App
