class Person {
    constructor (name, group) {
        this._name = name,
        this._group = group,
        this._scheduleAvailablity = []
    }

    addAvailableDates (availDates, schedule) {      //create array of dates with availability from selected dates and overall scheduling period (array)
        schedule.forEach(d => {
            if(availDates.some(a => a.getTime() == d.getTime())) {      //check if the current date in iteration matches one of the available dates provided
                this._scheduleAvailablity.push({        //add date to dates available array with true/false modifier
                    date: new Date(d.getTime()),
                    available: true
                })
            }
            else {
                this._scheduleAvailablity.push({
                    date: new Date(d.getTime()),
                    available: false
                })
            }
        })
    }

    getName () {
        return this._name
    }

    getGroup () {
        return this._group
    }

    getDatesAvailablity () {
        return this._scheduleAvailablity
    }
}

class Group {
    constructor (name) {
        this._name = name,
        this._people = []
        this._lessons = []
    }

    addPerson (person) {
        this._people.push(person)
    }

    getName () {
        return this._name
    }

    getPeople () {
        return this._people
    }
}

class Organization {
    constructor () {
        this._allPeople = []
        this._groups = []
    }

    addPerson (person) {
        this._allPeople.push(person)
        this._groups.forEach(g => {
            if (g.getName() == person.getGroup()) {
                g.addPerson(person)
            }
        })
    }

    getPeople () {
        return this._allPeople
    }

    addGroup (group) {
        this._groups.push(group)
    }

    getGroups () {
        return this._groups
    }

}

const availableThisDay = function (person, date) {      //checks whether the date matches one of the person's list of available dates
    return person._scheduleAvailablity.some(a => a.date.getTime() == date.getTime() && a.available)
}

class Schedule {
    constructor () {
        this._dates = []
        this._availabilityByGroup = []
    }

    makeWeeklyDates (startDate, endDate) {      //create array of dates (currently set to once a week) between two input dates (inclusive of start date)
        let weeklyDates = []
        let currentDate = new Date(startDate)
        let stopDate = new Date(endDate)
        let millisecondWeek = 7*24*3600*1000
        while(currentDate <= stopDate) {
            weeklyDates.push(new Date(currentDate))
            currentDate = new Date(currentDate.getTime() + millisecondWeek)
        }
        this._dates.push(...weeklyDates)
    }

    getAllDates () { 
        return this._dates
    }

    getAvailability () {
        return this._availabilityByGroup
    }

    makeAvailableDays (people, groups) {        //create array of dates (based on current schedule period array) organized by individual groups containing potential people available that date
        this._dates.forEach(d => {      //create object for each date containing date value and availability by group
            this._availabilityByGroup.push({
                date: d,
                sections: groups.map( g => {        //create object for each individual group containing array of potentially available people
                    return {
                        group: g.getName(),
                        potentialPeople: people.filter(p => availableThisDay(p, d) && p.getGroup() == g.getName())
                    }
                })
            })
        })
    }
}