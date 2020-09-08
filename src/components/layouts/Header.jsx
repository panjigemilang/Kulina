import React, { useContext } from "react"
import { HeaderApp, HeaderContent, Location, P } from "./headerStyle"
import { FontSize } from "../commons"
import { Context } from "../../context"
import Timeline from "../utils/Timeline"

// Icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

export default function Header() {
  const { locationShow, setlocationShow } = useContext(Context)

  return (
    <HeaderApp>
      <HeaderContent>
        <ArrowBackIcon />
        <Location>
          <P fontsize={FontSize.xs}>ALAMAT PENGANTARAN</P>
          <P onClick={() => setlocationShow(!locationShow)}>
            Tokopedia Tower
            <ExpandMoreIcon style={{ fontSize: "1rem", fill: "#f9423a" }} />
          </P>
        </Location>
      </HeaderContent>
      <Timeline />
    </HeaderApp>
  )
}
