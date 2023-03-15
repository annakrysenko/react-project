import React from 'react';
import TimerYear from 'components/Timers/TimerYear';
import TimerGoal from 'components/Timers/TimerGoal';

import Statistics from 'components/Statistics/Statistics';

import { TimerMainContainer } from 'components/Timers/TimerYear/TimerYear.styled';
import ReadTable from 'components/ReadTable/ReadTable';

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
      <ReadTable />
      <Statistics />
    </>
  );
};

export default Training;
