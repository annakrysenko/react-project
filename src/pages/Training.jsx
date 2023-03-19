import React from 'react';
import TimerYear from 'components/Timers/TimerYear';
import TimerGoal from 'components/Timers/TimerGoal';
import { TimerMainContainer } from 'components/Timers/TimerYear/TimerYear.styled';

import MyTraining from 'components/MyTraining/MyTraining';
import Graph from '../components/Graph/Graph';

import { Section, Container } from '../components/MyTraining/styles/containerTraining';
import {
	GoalTrainingBox,
	BoxPageStatistics,
} from '../components/MyGoal/styles';

import MyGoal from '../components/MyGoal/MyGoal';
export const Training = () => {
	return (
		
		<Section>
			<Container>
				<TimerMainContainer>
        			<TimerYear />
        			<TimerGoal />
      			</TimerMainContainer>

				<BoxPageStatistics>
					<GoalTrainingBox>
						<MyGoal />
						<MyTraining />
					</GoalTrainingBox>
					<Graph />
				</BoxPageStatistics>
				
			</Container>
		</Section>
	);
};

export default Training