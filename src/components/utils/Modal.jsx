import React, { Fragment, useContext, useState, useEffect } from "react"
import { Context } from "../../context"
import {
  ModalApp,
  Overlay,
  P,
  H3,
  InputContainer,
  ListContainer,
  List,
  Pin,
  Content,
} from "./modalStyle"

// Material-ui Icons
import CloseIcon from "@material-ui/icons/Close"
import LocationOnIcon from "@material-ui/icons/LocationOn"

export default function Modal() {
  const { locationShow, setlocationShow } = useContext(Context)
  const [locationInput, setlocationInput] = useState("")
  const [showList, setshowList] = useState(false)
  const locationData = [
    {
      city: "Bandung",
      address: "Jalan Tuludong Atas No. 28, Senayan, Kebayoran Bar ...",
    },
    {
      city: "Bandung",
      address: "Jalan Tuludong Atas No. 28, Senayan, Kebayoran Bar ...",
    },
    {
      city: "Bandung",
      address: "Jalan Tuludong Atas No. 28, Senayan, Kebayoran Bar ...",
    },
    {
      city: "Bandung",
      address: "Jalan Tuludong Atas No. 28, Senayan, Kebayoran Bar ...",
    },
    {
      city: "Bandung",
      address: "Jalan Tuludong Atas No. 28, Senayan, Kebayoran Bar ...",
    },
  ]

  useEffect(() => {
    if (locationShow)
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
    else document.getElementsByTagName("body")[0].style.overflow = "hidden auto"
  }, [locationShow])

  useEffect(() => {
    if (locationInput.length >= 3) setshowList(true)
    else setshowList(false)
  }, [locationInput])

  return (
    <Fragment>
      <Overlay className={locationShow ? "show" : null} />
      <ModalApp className={locationShow ? "show" : null}>
        <CloseIcon
          style={{ marginLeft: "auto" }}
          onClick={() => setlocationShow(!locationShow)}
        />
        <H3>Cek makanan yang tersedia di lokasi mu!</H3>
        <InputContainer>
          <LocationOnIcon style={{ fill: "#f9423a" }} />
          <input
            type="text"
            placeholder="Cari alamatmu disini"
            onChange={(e) => setlocationInput(e.target.value)}
          />
        </InputContainer>
        <ListContainer className={showList ? "show" : null}>
          {locationData.map((item, i) => (
            <List key={i}>
              <Pin>
                <LocationOnIcon />
              </Pin>
              <Content>
                <h5>{item.city}</h5>
                <P>{item.address}</P>
              </Content>
            </List>
          ))}
        </ListContainer>
        <footer>
          <P>Powered By Google</P>
        </footer>
      </ModalApp>
    </Fragment>
  )
}
