const request = require('request')
//const geocode = require('./geocode')
const foreCast = require('./utils/forecast')

foreCast(-75.7088,44.1545,(error,data)=>{
    console.log('Error',error)
    console.log('Data',data)
})