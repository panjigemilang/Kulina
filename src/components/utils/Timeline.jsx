import React, { useEffect, useState } from "react"
import { Data } from "../data"
import { FontSize } from "../commons"
import { TimelineApp, P } from "./timelineStyle"

export default function Timeline() {
  const [data, setdata] = useState(Data)
  const [active, setactive] = useState(1)

  useEffect(() => {
    console.log("Data", data)
    console.log("Day ", data[3].date.format("ddd").toLowerCase())
  }, [])

  const dateFormat = (date) => {
    let temp

    switch (date.format("ddd").toLowerCase()) {
      case "sun":
        temp = "MIN"
        break
      case "mon":
        temp = "SEN"
        break
      case "tue":
        temp = "SEL"
        break
      case "wed":
        temp = "RAB"
        break
      case "thu":
        temp = "KAM"
        break
      case "fri":
        temp = "JUM"
        break
      case "sat":
        temp = "SAB"
        break
      default:
        break
    }

    return temp
  }

  return (
    <TimelineApp>
      {data.map((item, i) => (
        <button
          key={item.id}
          className={active === item.id ? "active" : null}
          onClick={() => setactive(item.id)}
          disabled={
            dateFormat(item.date) === "SAB" || dateFormat(item.date) === "MIN"
              ? true
              : false
          }
        >
          <P fontsize={FontSize.xs}>{dateFormat(item.date)}</P>
          <P>{item.date.format("D")}</P>
        </button>
      ))}
    </TimelineApp>
  )
}
