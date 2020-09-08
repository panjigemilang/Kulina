import React from "react"
import AddIcon from "@material-ui/icons/Add"
import { Commons, Row } from "../commons"
import { CardContent } from "../data"
import { CardApp, Content, Title, P } from "./cardStyle"

export default function Card() {
  return CardContent.map((item, i) => (
    <React.Fragment key={i}>
      <CardApp boxShadow={Commons.boxShadow}>
        <img src={item.src} alt="Image.jpg" />
        <Content>
          <P>{item.score}</P>
          <P fontweight={900}>{item.name}</P>
          <P fontsize="12px" opacity=".7">
            {item.seller}
          </P>
          <Row>
            <Title>Rp.{item.price}</Title>
            <button>
              ADD <AddIcon style={{ fontSize: "1.2rem" }} />
            </button>
          </Row>
        </Content>
      </CardApp>
    </React.Fragment>
  ))
}
