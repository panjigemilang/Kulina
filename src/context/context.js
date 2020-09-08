import { createContext } from "react"

const Context = createContext({
  cartShow: false,
  locationShow: false,
  setcartShow: () => {},
  setlocationShow: () => {},
})

export { Context }
