class Person {
    constructor (name, group) {
        this._name = name,
        this._group = group,
        this._datesAvailable = []
    }

    addAvailableDates (availDates, schedule) {
        let allDates = schedule
        for (let availDate of availDates) {
            for (let index in allDates) {
                let timeStamp = allDates[index].getTime()
                if (availDate.getTime() == timeStamp) {
                    this._datesAvailable.push( {"${timeStamp}": true} )
                    // allDates.splice(0, index + 1)
                    break
                }
                this._datesAvailable.push( {timeStamp: false} )
            }
        }
    }

    getAvailableDates () {
        return this._datesAvailable
    }
}

class Group {
    constructor (name) {
        this.name = name,
        this.lessons = []
    }
}

class Schedule {
    constructor () {
        this._dates = []
        this.assignedDays = []
    }

    makeWeeklyDates (startDate, endDate) {
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

    makePotentialDays (people) {

    }

    // populateDates (dates) {     //receives input object of {startDate: date, endDate: date}
    //     $.post("/newSchedule", dates, function (response) {     //receives array of dates in DD-MM-YYYY format
    //         this.dates.push(...response)
    //         console.log(this.dates)
    //     })
    // }
}