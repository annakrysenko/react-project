import React from 'react';
import TimerYear from 'components/Timers/TimerYear';
import TimerGoal from 'components/Timers/TimerGoal';
import Statistics from 'components/Statistics/Statistics';
// import { useState, useEffect, useCallback } from 'react';

// import myGoal from 'components/MyGoal/MyGoal';
// import Training from 'components/MyTraining';

const Training = () => {
  return (
    <div>
      <TimerYear />
      <TimerGoal />
      <Statistics/>
    </div>
  );
};

export default Training;
