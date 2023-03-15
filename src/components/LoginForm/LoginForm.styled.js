import styled from 'styled-components';
import device from 'styles/deviceSize';
import bgpcdestop1x from '../../images/auth/pic-desk-1x.jpg';
import bgpcdestop2x from '../../images/auth/pic-desk-2x.jpg';

import bgpctablet1x from '../../images/auth/pic-tab-1x.jpg';
import bgpctablet2x from '../../images/auth/pic-tab-2x.jpg';

import bgpcmob1x from '../../images/auth/pic-mob-1x.jpg';
import bgpcmob2x from '../../images/auth/pic-mob-2x.jpg';
import theme from 'styles/theme';
import { ErrorMessage, Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const Container = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.desktop} {
    flex-direction: row;
    max-width: 1280px;
    margin: 0 auto;}
`;

export const BgContainer = styled.div`
max-width: 100%;
  background: ${theme.colors.overlay};
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: cover;
  background-image: linear-gradient(
      to right,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${bgpcmob1x});
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgpcmob2x});
  }
  @media screen and (${device.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 559px;
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgpctablet1x});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bgpctablet2x});
    }
  }
  @media screen and (${device.desktop}) {
    min-height: 850px;
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${bgpcdestop1x});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(9, 30, 63, 0.8),
          rgba(9, 30, 63, 0.8)
        ),
        url(${bgpcdestop2x});
    }
  }
`;

export const Wrapper = styled.div`

  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;

  @media (${device.tablet}) {
    max-width: 768px + 160px;
    padding: 0 32px;
  }

  @media (${device.desktop}) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;

export const FormnWrapper = styled(Form)`
display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px 20px;
  margin: 0 auto;
  @media screen and (${device.tablet}) {
    width: 400px;
    height: 467px;
    padding: 40px;
    margin: 0 auto;
    background-color: ${theme.colors.white};
  }
`;

export const GoogleButton = styled.a`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 28px;
  padding: 8px 14px;
  width: 150px;
  height: 40px;
  outline: none;
  border: none;
  color: ${theme.colors.googleFontColor};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 700;
  background-color: ${theme.colors.inputBackground};
  box-shadow: ${theme.shadows.hero};
  cursor: pointer;
  transition: ${theme.transition.transitionFunction};
  :hover,
  :focus {
    box-shadow: ${theme.shadows.google};
    background-color: ${theme.colors.modalBackground};
    color: ${theme.colors.googleFontColor};
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: ${theme.colors.secondaryFontColor};
  @media ${device.mobile} {
  }
  @media ${device.tablet} {
  }
  @media ${device.desktop} {
  }
`;

export const FieldLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.214;
  color: ${theme.colors.white};
  @media ${device.mobile} {
    font-weight: 600;
  }
  @media ${device.tablet} {
    font-weight: 500;
    color: ${theme.colors.secondaryFontColor};
  }
`;

export const AccentSpan = styled.span`
  color: ${theme.colors.accentColor};
`;

export const InputField = styled(Field)`
  padding: 8px 12px;
  outline: none;
  border: 1px solid ${theme.colors.inputBackground};
  box-shadow: ${theme.shadows.input};
  background-color: ${theme.colors.inputBackground};
  transition: ${theme.transition.transitionFunction};
  :hover,
  :focus {
    border: 1px solid ${theme.colors.headerBackground};
  }
`;

export const Error = styled(ErrorMessage)`
  font-size: 12px;
  font-weight: 600;
  color: ${theme.colors.accentColor};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 60px;
  border: none;
  background-color: ${theme.colors.accentColor};
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  cursor: pointer;
  transition: ${theme.transition.transitionFunction};
  :hover {
    background-color: ${theme.colors.hover};
  }
  :disabled {
    background-color: ${theme.colors.headerBackground};
    color: ${theme.colors.secondaryFontColor};
    cursor: not-allowed;
  }
`;

export const StyledLink = styled(Link)`
  text-align: center;
  margin-top: 16px;
 color: ${theme.colors.accentColor};
`;