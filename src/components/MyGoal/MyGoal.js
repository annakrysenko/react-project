import React from 'react';
import { useSelector } from 'react-redux';

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
  const currentlyReading = useSelector(getCurrentlyReading);
  const finishedReading = useSelector(getFinishedReading);
  const startDate = useSelector(getStartDate);
  const endDate = useSelector(getEndDate);

  const numberOfDays = Math.floor(
    (Date.parse(endDate) - Date.parse(startDate)) / (1000 * 60 * 60 * 24)
  );

  console.log('endDate', endDate);
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
                  <span>0</span>
                </ProgressNumber>
                <ProgressText progressTextNoStat>Amount of books</ProgressText>
              </ProgressItem>
              <ProgressItem progressItemNoStat>
                <ProgressNumber progressNumberNoStat>
                  {/* <span>{Boolean(numberOfDays) ? numberOfDays : 0}</span> */}
                  <span>0</span>
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
                  <span>{currentlyReading.length}</span>
                </ProgressNumber>
                <ProgressText>Amount of books</ProgressText>
              </ProgressItem>
              <ProgressItem>
                <ProgressNumber>
                  {/* <span>{Boolean(numberOfDays) ? numberOfDays : 0}</span> */}
                  <span>{numberOfDays}</span>
                </ProgressNumber>
                <ProgressText>Amount of days</ProgressText>
              </ProgressItem>

              <ProgressItem>
                <ProgressNumber>
                  <ProgressNumberLast>
                    {finishedReading.length}
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
export default MyGoal;
