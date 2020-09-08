// get 2 weeks date
const Data = []
const days = 14
const currentDate = new Date()
let temp = {}

for (let i = 1; i <= days; i++) {
  temp = {
    id: i,
    date: currentDate.setDate(currentDate.getDate() + i),
    active: i === 1 ? true : false,
  }

  Data.push(temp)
  temp = {}
}

export { Data }
