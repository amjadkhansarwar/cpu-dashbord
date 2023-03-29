import React, { useState, useEffect } from 'react';
import './Weather.css';
import * as API from '../../api/api';



/* const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=59.3293&lon=18.0686&appid=${apiKey}`; */

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect( () => {
     const data = async ()  => {
      const data = await API.GetWeather();
      setWeatherData(data);
    }
    data();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const weatherIconUrl = 'https://openweathermap.org/img/w/';
  const weatherIcon = weatherData.weather[0].icon;
  const weatherLocation = weatherData.name;
  const weatherTemperature = weatherData.main.temp - 273.15;
  const weatherDescription = weatherData.weather[0].description;

  function unixTimestampToTime(unixTimestamp) {
    // Create a new Date object from the Unix timestamp (in seconds)
    let date = new Date(unixTimestamp * 1000);
  
    // Get the hours, minutes, and seconds from the Date object
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();
  
    // Return the time in the format "hh:mm:ss"
    return hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  }

  return (
    <div className="weather-container">
      <div className="weather-header">
        <h2>Weather Forecast</h2>
      </div>
      <div className="weather-content">
        <div className="weather-data">
          <div className="weather-icon">
            <img src={`${weatherIconUrl}${weatherIcon}.png`} alt="weather icon" />
          </div>
          <div className="weather-details">
            <div className="weather-location">{weatherLocation}</div>
            <div className="weather-temperature">{`${Math.round(weatherTemperature)}°C`}</div>
            <div className="weather-description">{weatherDescription}</div>
            <div className="weather-description">Visibility: {weatherData.visibility}</div>
            <div className="weather-description">Sun Rise: {unixTimestampToTime(weatherData.sys.sunrise)}</div>
            <div className="weather-description">Sun Set: {unixTimestampToTime(weatherData.sys.sunset)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
