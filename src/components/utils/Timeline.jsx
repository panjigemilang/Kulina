import React, { useEffect, useState } from "react"
import { Data } from "../data"
import { FontSize } from "../commons"
import { TimelineApp, P } from "./timelineStyle"

export default function Timeline() {
  const [data, setdata] = useState(Data)

  return (
    <TimelineApp>
      {data.map((item) => (
        <button key={item.id}>
          <P fontsize={FontSize.xs}>Sen</P>
          <P>{item.id}</P>
        </button>
      ))}
    </TimelineApp>
  )
}
