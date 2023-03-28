
const API_KEY='a03d5359fd3cca8ba8a852c9e86b749c'

export const GetWeather = async () => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=59.3293&lon=18.0686&appid=${API_KEY}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.log(error)
    }
}
