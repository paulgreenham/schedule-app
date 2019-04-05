const schedule = new Schedule
const childrenMinistry = new Organization

let firstDate = new Date(2019, 4, 4)
let lastDate = new Date(2019, 5, 29)

schedule.makeWeeklyDates(firstDate, lastDate)

const paul = new Person("Paul", "Gryphons")
const char = new Person("Char", "Lambs")

const groupThree = new Group("Gryphons")
const groupOne = new Group("Lambs")

childrenMinistry.addGroup(groupOne)
childrenMinistry.addGroup(groupThree)

paul.addAvailableDates([new Date(2019, 4, 4), new Date(2019, 4, 11), new Date(2019, 5, 22)], schedule.getAllDates())
char.addAvailableDates([new Date(2019, 4, 11), new Date(2019, 4, 18), new Date(2019, 5, 1), new Date(2019, 5, 8), new Date(2019, 5, 29)], schedule.getAllDates())

childrenMinistry.addPerson(paul)
childrenMinistry.addPerson(char)
schedule.makeAvailableDays(childrenMinistry.getPeople(), childrenMinistry.getGroups())

console.log(schedule.getAvailability())
console.log(childrenMinistry)
