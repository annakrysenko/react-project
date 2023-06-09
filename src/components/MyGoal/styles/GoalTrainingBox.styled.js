import styled from 'styled-components';

export const BoxPageTraining = styled.div`
  display: block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const BoxPageStatistics = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const GoalTrainingBox = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    /* flex-direction: row-reverse;
    align-items: flex-start; */
  }
`;

export const BoxTimersAndTraining = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-right: 32px;
  }
`;

export const BoxGoalAndResult = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-right: 32px;
  }
`;

export const StatlTrainingBox = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: flex-start;
  }
`;
