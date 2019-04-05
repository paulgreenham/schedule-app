class Person {
    constructor (name, group) {
        this._name = name,
        this._group = group,
        this._scheduleAvailablity = []
    }

    addAvailableDates (availDates, schedule) {
        schedule.forEach(d => {
            if(availDates.some(a => a.getTime() == d.getTime())) {
                this._scheduleAvailablity.push({
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

    getDatesAvailablity () {
        return this._scheduleAvailablity
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