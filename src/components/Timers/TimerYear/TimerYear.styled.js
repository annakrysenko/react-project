import styled from 'styled-components';
import device from 'styles/deviveSize';
import theme from 'styles/theme';

export const TimerMainContainer = styled.div`
  @media ${device.tablet} {
    display: flex;
    margin-top: 40px;
  }

  /* display: flex;
  flex-direction: column;
  align-items: center; */

  @media (max-width: 1280px) {
    justify-content: center;
  }

  @media ${device.desktop} {
    margin-top: 0px;
    display: flex;
  }
`;

export const TimerYearContainer = styled.div`
  @media ${device.mobile} and (max-width: 768px) {
    margin-top: 20px;
  }

  @media ${device.tablet} {
    margin-right: 32px;
  }

  @media ${device.desktop} {
    padding-left: 137px;
    margin-right: 74px;
  }
`;

export const TimerHeader = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: ${theme.colors.secondaryFontColor};
  width: 241px;
  margin-bottom: 8px;
  margin-left: auto;
  margin-right: auto;

  /* @media ${device.tablet} {
    font-size: 25px;
  } */
`;

export const TimerWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: ${theme.shadows.myGoals};
  background-color: ${theme.colors.white};

  @media ${device.mobile} {
    width: 280px;
    height: 60px;
  }
  @media ${device.tablet} {
    width: 290px;
    height: 60px;
  }
`;

export const TimerNumbers = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 1.5;
  color: ${theme.colors.timer};
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding-right: 20px;
  padding-left: 20px;
`;

export const TimerLetters = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  color: ${theme.colors.secondaryFontColor};
  text-align: center;
  display: flex;
  justify-content: space-around;
  padding-right: 10px;
  padding-left: 10px;
`;
