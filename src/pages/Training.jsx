import React from 'react';
import TimerYear from 'components/Timers/TimerYear';
import TimerGoal from 'components/Timers/TimerGoal';
import { TimerMainContainer } from 'components/Timers/TimerYear/TimerYear.styled';
import { useEffect } from 'react';
import MyTraining from 'components/MyTraining/MyTraining';
import Graph from '../components/Graph/Graph';

import {
  Section,
  Container,
} from '../components/MyTraining/styles/containerTraining';
import {
  GoalTrainingBox,
  BoxPageStatistics,
} from '../components/MyGoal/styles';

import MyGoal from '../components/MyGoal/MyGoal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/books/booksOperations';
import { getCurrentlyReading } from 'redux/books/booksSelectors';
import { BoxTimersAndTraining } from 'components/MyGoal/styles/GoalTrainingBox.styled';

export const Training = () => {
  const dispatch = useDispatch();

  const currentlyReading = useSelector(getCurrentlyReading);

  useEffect(() => {
    // console.log('fivrst');
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <Section>
      <Container>
        <BoxPageStatistics>
          <GoalTrainingBox>
            <BoxTimersAndTraining>
              {currentlyReading !== null && currentlyReading.length > 0 && (
                <TimerMainContainer>
                  <TimerYear />
                  <TimerGoal />
                </TimerMainContainer>
              )}
              <MyTraining />
            </BoxTimersAndTraining>
            <MyGoal />
          </GoalTrainingBox>

          <Graph />
        </BoxPageStatistics>
      </Container>
    </Section>
  );
};

export default Training;
