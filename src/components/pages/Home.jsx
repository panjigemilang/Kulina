import React from "react"
import Card from "../utils/Card"
import { Data } from "../data"
import { HomeApp } from "./homeStyle"

export default function Home({ setdistY }) {
  const onWheel = (e) => {
    let currentOffset = e.nativeEvent.wheelDelta

    setdistY(currentOffset)
  }

  return (
    <HomeApp onWheel={onWheel}>
      <h3>{Data[0].date.format("ddd, D MMM YYYY")}</h3>
      <Card />
    </HomeApp>
  )
}
