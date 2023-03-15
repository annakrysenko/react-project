import React, { useEffect, useState } from 'react';
import {
  TimerHeader,
  TimerLetters,
  TimerNumbers,
  TimerWrapper,
  TimerYearContainer,
} from './TimerYear.styled';

const TimerYear = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const newYear = 'January, 01, 2024';

  function addInitialZero(value) {
    return String(value).padStart(2, '0');
  }

  const getTime = () => {
    const time = Date.parse(newYear) - Date.now();
    // console.log(time);
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(newYear), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TimerYearContainer>
      <TimerHeader>Years countdown</TimerHeader>
      <TimerWrapper>
        <TimerNumbers>
          <span>{addInitialZero(days)}</span>
          <span>:</span>
          <span>{addInitialZero(hours)}</span>
          <span>:</span>
          <span>{addInitialZero(minutes)}</span>
          <span>:</span>
          <span>{addInitialZero(seconds)}</span>
        </TimerNumbers>
        <TimerLetters>
          <span>DAYS</span>
          <span>HRS</span>
          <span>MINS</span>
          <span>SECS</span>
        </TimerLetters>
      </TimerWrapper>
    </TimerYearContainer>
  );
};

export default TimerYear;
