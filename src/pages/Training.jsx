import React from 'react';
import TimerYear from 'components/Timers/TimerYear';
import TimerGoal from 'components/Timers/TimerGoal';
import { TimerMainContainer } from 'components/Timers/TimerYear/TimerYear.styled';
// import { useState, useEffect, useCallback } from 'react';

// import myGoal from 'components/MyGoal/MyGoal';
// import Training from 'components/MyTraining';

const Training = () => {
  return (
    <TimerMainContainer>
      <TimerYear />
      <TimerGoal />
    </TimerMainContainer>
  );
};

export default Training;
