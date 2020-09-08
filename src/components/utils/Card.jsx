import React, { useContext } from "react"
import { Context } from "../../context"
import { Commons, Row } from "../commons"
import { CardContent } from "../data"
import { CardApp, Content, Score, Title, P } from "./cardStyle"

// Material-ui Icon
import AddIcon from "@material-ui/icons/Add"
import StarIcon from "@material-ui/icons/Star"
import StarHalfIcon from "@material-ui/icons/StarHalf"

export default function Card() {
  const { cartShow, setcartShow } = useContext(Context)
  const stars = [
    <StarIcon />,
    <StarIcon />,
    <StarIcon />,
    <StarIcon />,
    <StarHalfIcon />,
  ]

  return CardContent.map((item, i) => (
    <React.Fragment key={i}>
      <CardApp boxShadow={Commons.boxShadow}>
        <img src={item.src} alt="Kucing.jpg" />
        <Content>
          <Score>
            <P opacity=".7">{item.score}</P>
            <div>
              {stars.map((item, i) => (
                <React.Fragment key={i}>{item}</React.Fragment>
              ))}
            </div>
          </Score>
          <P fontweight={900}>{item.name}</P>
          <P fontsize="12px" opacity=".7">
            {item.seller}
          </P>
          <Row>
            <Title>Rp {item.price}</Title>
            <button onClick={() => setcartShow(!cartShow)}>
              ADD <AddIcon style={{ fontSize: "1.2rem" }} />
            </button>
          </Row>
        </Content>
      </CardApp>
    </React.Fragment>
  ))
}
