const express = require('express')
const router = express.Router()
const moment = require('moment')

// const createPeriod = function (startDate, endDate) {    //receives two input dates
//     let dateArray = []
//     let currentDate = moment(startDate).format("DD-MM-YYYY")
//     console.log(currentDate)
//     let stopDate = moment(endDate).format("DD-MM-YYYY")
//     console.log(stopDate)
//     while(currentDate <= stopDate) {
//         dateArray.push(moment(currentDate).format("DD-MM-YYYY"))
//         currentDate = moment(currentDate).add(7, "days")
//     }
//     return dateArray    //returns an array of weekly iterated dates
// }

// const currentSchedule = []

// router.post("/newSchedule", function (req, res) {   //receives input JSON string of {body: "{"startDate": "date", "endDate": "date"}"}
//     let inputDates = req.body
//     let period = createPeriod(inputDates.startDate, inputDates.endDate)     
//     console.log(period)
//     currentSchedule.push(...period)
//     res.send(period)    //sends array of weekly iterated dates
// })

module.exports = router