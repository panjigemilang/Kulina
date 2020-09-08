import moment from "moment"

// get 2 weeks date
const Data = []
const days = 14
const today = moment()
let temp = {},
  tomorrow

for (let i = 1; i <= days; i++) {
  tomorrow = moment(today).add(i - 1, "days")

  temp = {
    id: i,
    date: tomorrow,
  }

  Data.push(temp)
  temp = {}
}

export { Data }
