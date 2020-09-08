import React from "react"
import { HeaderApp, HeaderContent, Location, P } from "./headerStyle"
import { FontSize } from "../commons"
import Timeline from "../utils/Timeline"

// Icons
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

export default function Header() {
  return (
    <HeaderApp>
      <HeaderContent>
        <ArrowBackIcon />
        <Location>
          <P fontsize={FontSize.xs}>ALAMAT PENGANTARAN</P>
          <P>
            Tokopedia Tower <ExpandMoreIcon style={{ fontSize: "1rem" }} />
          </P>
        </Location>
      </HeaderContent>
      <Timeline />
    </HeaderApp>
  )
}
