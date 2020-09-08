import React from "react"
import { Commons, Row } from "../commons"
import { CardContent } from "../data"
import { CardApp, Title } from "./cardStyle"

export default function Card() {
  return CardContent.map((item, i) => (
    <React.Fragment key={i}>
      <CardApp boxShadow={Commons.boxShadow}>
        <img src={item.src} alt="Image.jpg" />
        <p>{item.score}</p>
        <Title>{item.name}</Title>
        <p>{item.seller}</p>
        <Row>
          <p>{item.price}</p>
          <button>Add +</button>
        </Row>
      </CardApp>
    </React.Fragment>
  ))
}
