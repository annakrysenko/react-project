import styled from 'styled-components';
import {screenSize} from 'styles/deviceSize';
import { Field, Form } from 'formik';
import theme from 'styles/theme';
import device from 'styles/deviceSize';

export const BOX= styled.div`
padding-left: 20px;
padding-right:20px;
height: 100vh;
margin-left: auto;
  margin-right: auto;
`

export const FORM = styled(Form)`
 
  width: 280px;
  
  @media screen and (min-width:${screenSize.desktop}) {
    display: flex;
  }
`;
export const INPUT = styled(Field)`
  background-color: ${theme.colors.inputBackground};
  border: 1px solid #a6abb9;
  height: 42px;
  width: 100%;
  border-radius: 0;
  display: block;

  :hover {
    background-color: ${theme.colors.white};
  }
`;
export const Button = styled.button`
 margin-top: 40px;
  height: 42px;
  min-width: 172px;
  background-color: ${theme.colors.inputBackground};
  @media  ${device.desktop} {
    margin-top: 30px;
  }
`;
export const LABEL = styled.label`
    color:${theme.colors.secondaryFontColor};
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;

  @media ${device.desktop} {
    margin-right: 16px;
    margin-bottom: 0;
    :nth-child(2) {
      width: 150px;
    }
    :nth-child(3) {
      width: 150px;
    }
  }
  @media ${device.tablet} {
    :nth-child(2) {
      width: 152px;
    }
    :nth-child(3) {
      width: 152px;
    }
  }
`;



