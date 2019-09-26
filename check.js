const request = require('request')

const url = 'https://api.darksky.net/forecast/eac1f0de913e539cf99eb2c03196b8aa/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
    }
})
