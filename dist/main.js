const schedule = new Schedule

let firstDate = new Date(2019, 4, 4)
let lastDate = new Date(2019, 5, 29)

// const period = {
//     startDate: firstDate,
//     endDate: lastDate
// }

schedule.makeWeeklyDates(firstDate, lastDate)

const paul = new Person("Paul", "Gryphons")
const char = new Person("Char", "Lambs")

paul.addAvailableDates([new Date(2019, 4, 4), new Date(2019, 4, 11), new Date(2019, 5, 22)], schedule.getAllDates())
console.log(paul.getAvailableDates())