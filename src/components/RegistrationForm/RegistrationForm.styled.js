import { Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import device from 'styles/deviceSize';
import theme from 'styles/theme';


export const Section = styled.section`
  margin: 0 auto;
   @media ${device.desktop} {
    display: flex;
    justify-content: center;
  } 
`;

export const Wrapper = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;

  @media ${device.tablet} {
    max-width: 768px + 160px;
   padding: 65px;
  }

  @media ${device.desktop} {
    width: 100%;
     padding: 91px 75px;
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
    height: 609px;
    padding: 40px;
    margin: 0 auto;
    background-color: ${theme.colors.white};
  }
`;

export const GoogleButton = styled.button`
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

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 8px;

  font-size: 13px;
`;

export const Paragraph = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 13px;

  color: ${theme.colors.secondaryFontColor};
`;

export const StyledLink = styled(Link)`
  text-align: center;
 color: ${theme.colors.accentColor};
`;

export const AboutWrapper = styled.div`
flex-grow: 3;
  margin-top: 197px;
`