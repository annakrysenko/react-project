import React from 'react';
import { Container } from "components/Library/BookProcesing/Books.styled";
import TimerGoal from "components/Timers/TimerGoal";
import TimerYear from "components/Timers/TimerYear";
import { TimerMainContainer } from 'components/Timers/TimerYear/TimerYear.styled';



const Statistics = () => {
  return (
    <Container>
      <div>
        <TimerMainContainer>
          <TimerYear />
          <TimerGoal />
        </TimerMainContainer>
        {/* <MyGoals />
        <StatisticsBookLIst />
        <ChartLine />
        <StatisticsBookPages /> */}
      </div>
    </Container>
  );
};

export default Statistics;