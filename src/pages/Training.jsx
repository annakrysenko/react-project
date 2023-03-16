import React from 'react';
import TimerYear from 'components/Timers/TimerYear';
import TimerGoal from 'components/Timers/TimerGoal';
import MyGoal from 'components/MyGoal/MyGoal';
import Statistics from 'components/Statistics/Statistics';

import { TimerMainContainer } from 'components/Timers/TimerYear/TimerYear.styled';
import ReadTable from 'components/ReadTable/ReadTable';
import MyTraining from 'components/MyTraining/MyTraining';

// import { useState, useEffect, useCallback } from 'react';
// import myGoal from 'components/MyGoal/MyGoal';
// import Training from 'components/MyTraining';

const Training = () => {
  return (
    <>
      <TimerMainContainer>
        <TimerYear />
        <TimerGoal />
        
      </TimerMainContainer>
      <MyGoal />
      <MyTraining/>
      <ReadTable />
      
      <Statistics />
    </>
  );
};

export default Training;
