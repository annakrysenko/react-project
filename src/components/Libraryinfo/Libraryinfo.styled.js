import styled from 'styled-components';
import { screenSize } from 'styles/deviceSize';

export const InfoMainContainer = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  max-height: 100%;
  top: 64%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  @media screen and (min-width: ${screenSize.tablet}) {
    position: static;
    transform: translate(0, 0);
    max-width: 608px;
    max-height: 275px;
  }
`;

export const InfoIcon = styled.span`
  display: flex;
  align-self: baseline;
`;

export const InfoDescription = styled.p`
  display: inline-flex;
  margin-left: 12px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.21;
  color: #242a37;
  max-width: 178px;

  @media screen and (min-width: ${screenSize.tablet}) {
    max-width: fit-content;
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
export const InfoPositioningContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
export const InfoItem = styled.li`
  display: flex;
`;
export const InfoGapContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  /* align-items: center; */
  :first-child {
    margin-bottom: 20px;
    @media screen and (min-width: ${screenSize.tablet}) {
      margin-bottom: 24px;
      display: block;
    }
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 43px 20px 0px 20px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: ${screenSize.tablet}) {
    padding: 40px 40px;
  }
`;
export const InfoTitle = styled.h2`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #242a37;

  @media screen and (min-width: 768px) {
    margin-bottom: 16px;
    font-size: 19px;
    line-height: 1.21;
  }
`;
export const InfoList = styled.ul`
  padding-left: 33px;
`;
export const InfoText = styled.span`
  display: flex;
  margin-left: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  max-width: 155px;
  @media screen and (min-width: 768px) {
    max-width: fit-content;
  }
`;
export const InfoMobileLink = styled.button`
  display: flex;
  /* text-decoration: none; */
  cursor: pointer;
  border: none;
  margin-bottom: 98px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: ${props => (props.linkstyle ? '0' : '11px 52px 12px 54px')};
  background-color: ${props => (props.linkstyle ? 'transparent' : '#ff6b08')};
  color: ${props => (props.linkstyle ? '#ff6b08' : '#ffffff')};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  box-shadow: ${props =>
    props.linkstyle ? 'none' : '0px 2px 4px rgba(0, 0, 0, 0.25);'};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const LibaryContainer = styled.div`
  position: relative;
`;
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;
