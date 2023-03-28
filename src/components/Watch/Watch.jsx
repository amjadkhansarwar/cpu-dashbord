import React, { useState, useEffect } from 'react';
import './clock.css';

const  Watch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getRotation = (value, max) => {
    return (value / max) * 360;
  };

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourRotation = getRotation(hours, 12) + getRotation(minutes, 60) / 12;
  const minuteRotation = getRotation(minutes, 60) + getRotation(seconds, 60) / 60;
  const secondRotation = getRotation(seconds, 60);

  const hourStyle = {
    transform: `rotate(${hourRotation}deg)`
  };

  const minuteStyle = {
    transform: `rotate(${minuteRotation}deg)`
  };

  const secondStyle = {
    transform: `rotate(${secondRotation}deg)`
  };

  return (
    <div className="clock">
      <div className="hour-hand" style={hourStyle}></div>
      <div className="minute-hand" style={minuteStyle}></div>
      <div className="second-hand" style={secondStyle}></div>
      <div className="center"></div>
  <div class="hour hour1">1</div>
  <div class="hour hour2">2</div>
  <div class="hour hour3">3</div>
  <div class="hour hour4">4</div>
  <div class="hour hour5">5</div>
  <div class="hour hour6">6</div>
  <div class="hour hour7">7</div>
  <div class="hour hour8">8</div>
  <div class="hour hour9">9</div>
  <div class="hour hour10">10</div>
  <div class="hour hour11">11</div>
  <div class="hour hour12">12</div>

    </div>
  );
}

export default Watch;
