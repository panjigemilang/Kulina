import React from "react"
import styled from "styled-components"
import Card from "../utils/Card"
import { HomeApp } from "./homeStyle"

export default function Home() {
  return (
    <HomeApp>
      <h3>{new Date().toDateString()}</h3>
      <Card />
    </HomeApp>
  )
}
