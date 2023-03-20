import React, { useEffect, useState } from 'react';
import {
  TimerHeader,
  TimerLetters,
  TimerNumbers,
  TimerWrapper,
  TimerGoalContainer,
} from './TimerGoal.styled';

import { getEndDate, getStartDate } from 'redux/books/booksSelectors';
import { useSelector } from 'react-redux';

const TimerGoal = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // const endDate = 'July, 11, 2023';
  const endDate = useSelector(getEndDate);
  const startDate = useSelector(getStartDate);
  // console.log(startDate);
  // console.log(endDate);

  function addInitialZero(value) {
    return String(value).padStart(2, '0');
  }

  const getTime = () => {
    const time = Date.parse(endDate) - Date.now();
    // console.log(time);
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TimerGoalContainer>
      <TimerHeader>Goals countdown</TimerHeader>
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
    </TimerGoalContainer>
  );
};

export default TimerGoal;
