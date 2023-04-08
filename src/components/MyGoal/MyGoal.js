import React from 'react';
import { useSelector } from 'react-redux';


import {
	ProgressItem,
	ProgressNumber,
	ProgressNumberLast,
	ProgressText,
	ProgressList,
	ProgressTitle,
	ProgressSubContainer,
	ProgressContainer,
} from './styles';
import {
	getCurrentlyReading,
	getFinishedReading,
	getStartDate,
	getEndDate,
} from '../../redux/books/booksSelectors';


const MyGoal = () => {


	const currentlyReading = useSelector(getCurrentlyReading);
	const finishedReading = useSelector(getFinishedReading);
	const startDate = useSelector(getStartDate);
	const endDate = useSelector(getEndDate);

	const numberOfDays = Math.floor(
		(Date.parse(endDate) - Date.parse(startDate)) / (1000 * 60 * 60 * 24)
	);

	return (
		<>
			{currentlyReading.length === 0 && (
				<ProgressContainer progressContainerNoStat>
					<ProgressSubContainer progressTitle progressTitleNoStat>
						<ProgressTitle>My goal</ProgressTitle>
					</ProgressSubContainer>
					<ProgressSubContainer progressList>
						<ProgressList progressListNoStat>
							<ProgressItem progressItemNoStat>
								<ProgressNumber progressNumberNoStat>
									<span>
										{currentlyReading.length <1 ? 0 : currentlyReading.length + finishedReading.length}
									</span>
								</ProgressNumber>
								<ProgressText progressTextNoStat>Amount of books</ProgressText>
							</ProgressItem>
							<ProgressItem progressItemNoStat>
								<ProgressNumber progressNumberNoStat>
									<span>{Boolean(numberOfDays) ? numberOfDays : 0}</span>
								</ProgressNumber>
								<ProgressText progressTextNoStat>Amount of days</ProgressText>
							</ProgressItem>
						</ProgressList>
					</ProgressSubContainer>
				</ProgressContainer>
			)}
			{currentlyReading.length !== 0 && (
				<ProgressContainer>
					<ProgressSubContainer progressTitle>
						<ProgressTitle>My goal</ProgressTitle>
					</ProgressSubContainer>
					<ProgressSubContainer progressList>
						<ProgressList>
							<ProgressItem>
								<ProgressNumber>
									<span>
										{currentlyReading.length + finishedReading.length}
									</span>
								</ProgressNumber>
								<ProgressText>Amount of books</ProgressText>
							</ProgressItem>
							<ProgressItem>
								<ProgressNumber>
									<span>{Boolean(numberOfDays) ? numberOfDays : 0}</span>
								</ProgressNumber>
								<ProgressText>Amount of days</ProgressText>
							</ProgressItem>

							<ProgressItem>
								<ProgressNumber>
									<ProgressNumberLast>
										{currentlyReading.length}
									</ProgressNumberLast>
								</ProgressNumber>
								<ProgressText>Books left</ProgressText>
							</ProgressItem>
						</ProgressList>
					</ProgressSubContainer>
				</ProgressContainer>
			)}
		</>
	);
};
export default MyGoal