import React, { useState } from "react"
import { Row } from "../commons"
import { MenuApp, Button } from "./menuStyle"

export default function Menu({ distY }) {
  const [active, setactive] = useState(1)

  return (
    <MenuApp className={distY < 0 ? "up" : "down"}>
      <Row>
        <Button
          className={`left ${active === 1 ? "active" : null}`}
          onClick={() => setactive(1)}
        >
          Lunch
        </Button>
        <Button
          className={`right ${active === 2 ? "active" : null}`}
          onClick={() => setactive(2)}
        >
          Dinner
        </Button>
      </Row>
    </MenuApp>
  )
}
