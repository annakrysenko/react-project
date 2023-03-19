import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { useState } from "react";
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
	const location = useLocation();

	const currentlyReading = useSelector(getCurrentlyReading);
	const finishedReading = useSelector(getFinishedReading);
	const startDate = useSelector(getStartDate);
	const endDate = useSelector(getEndDate);

	const numberOfDays = Math.floor(
		(Date.parse(endDate) - Date.parse(startDate)) / (1000 * 60 * 60 * 24)
	);

	return (
		<>
			{location.pathname !== '/statistics' && (
				<ProgressContainer progressContainerNoStat>
					<ProgressSubContainer progressTitle progressTitleNoStat>
						<ProgressTitle>Моя мета прочитати</ProgressTitle>
					</ProgressSubContainer>
					<ProgressSubContainer progressList>
						<ProgressList progressListNoStat>
							<ProgressItem progressItemNoStat>
								<ProgressNumber progressNumberNoStat>
									<span>
										{currentlyReading.length<1? 0 : currentlyReading.length + finishedReading.length}
									</span>
								</ProgressNumber>
								<ProgressText progressTextNoStat>Кількість книжок</ProgressText>
							</ProgressItem>
							<ProgressItem progressItemNoStat>
								<ProgressNumber progressNumberNoStat>
									<span>{Boolean(numberOfDays) ? numberOfDays : 0}</span>
								</ProgressNumber>
								<ProgressText progressTextNoStat>Кількість днів</ProgressText>
							</ProgressItem>
						</ProgressList>
					</ProgressSubContainer>
				</ProgressContainer>
			)}
			{location.pathname === '/statistics' && (
				<ProgressContainer>
					<ProgressSubContainer progressTitle>
						<ProgressTitle>Моя мета прочитати</ProgressTitle>
					</ProgressSubContainer>
					<ProgressSubContainer progressList>
						<ProgressList>
							<ProgressItem>
								<ProgressNumber>
									<span>
										{currentlyReading.length + finishedReading.length}
									</span>
								</ProgressNumber>
								<ProgressText>Кількість книжок</ProgressText>
							</ProgressItem>
							<ProgressItem>
								<ProgressNumber>
									<span>{Boolean(numberOfDays) ? numberOfDays : 0}</span>
								</ProgressNumber>
								<ProgressText>Кількість днів</ProgressText>
							</ProgressItem>

							<ProgressItem>
								<ProgressNumber>
									<ProgressNumberLast>
										{currentlyReading.length}
									</ProgressNumberLast>
								</ProgressNumber>
								<ProgressText>Залишилось книжок</ProgressText>
							</ProgressItem>
						</ProgressList>
					</ProgressSubContainer>
				</ProgressContainer>
			)}
		</>
	);
};
export default MyGoal