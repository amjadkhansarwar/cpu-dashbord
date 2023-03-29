import React from 'react'
import axios from 'axios'
const WEATHER_API_KEY='a03d5359fd3cca8ba8a852c9e86b749c'
const TRAFFIC_API_KEY='1f43b48aa22945f587a7865064f9c2e2'

export const GetWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=59.3293&lon=18.0686&appid=${WEATHER_API_KEY}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.log(error)
    }
}

export const GetTraffic = async () => {
     axios.get('https://api.sl.se/api2/realtimedeparturesV4.json?key=1f43b48aa22945f587a7865064f9c2e2&siteid=9192&timewindow=40')
    .then(response => {
        console.log(response.data.ResponseData.Metros)
    })
    .catch(error => {
        console.log(error)
    })
}
