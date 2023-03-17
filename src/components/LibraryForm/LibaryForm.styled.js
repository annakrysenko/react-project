import styled from 'styled-components';
import { screenSize } from 'styles/deviceSize';
import { Field, Form } from 'formik';
import theme from 'styles/theme';
import { BsArrowLeft } from 'react-icons/bs';

export const ICONARROW = styled(BsArrowLeft)`
  fill: #ff6b08;
  margin-bottom: 32px;
  width: 24px;
  height: 12px;
  :hover,
  :focus {
    fill: #a6abb9;
  }
  @media screen and (min-width: ${screenSize.tablet}) {
    display: none;
  }
`;

export const BOX = styled.div`
  padding-top: 24px;
  padding-left: 20px;
  padding-right: 20px;
margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${screenSize.desktop}){
    padding-top: 40px;
    
  }
`;

export const FORM = styled(Form)`
  width: 100%;
 
  @media screen and (min-width: ${screenSize.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  
   
  }
`;
export const INPUT = styled(Field)`
  background-color: ${theme.colors.inputBackground};
  border: 1px solid #a6abb9;
  height: 42px;
  width: 100%;
  border-radius: 0;
  display: block;
  margin-top: 8px;
  padding: 12px;

  :hover {
    background-color: ${theme.colors.white};
  }
`;
export const Button = styled.button`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border: 1px solid #242a37;
  padding: 12px 58px;
  font-weight: 500;
  font-size: 14px;
line-height: 1.21;
  background-color: ${theme.colors.inputBackground};
  :hover {
    background-color: #ffffff;
  }
  @media screen and (min-width: ${screenSize.desktop}) {
    margin: 0px;
    margin-left: 48px;
    padding: 12px 63px;
  }
`;
export const LABEL = styled.label`
  color: ${theme.colors.secondaryFontColor};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
`;
export const WrapperINPUT = styled.div`
  :not(:last-child) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: ${screenSize.tablet}) {
    :not(:last-child) {
      margin-bottom: 0px;
    }
    :first-child {
      margin-right: 0px;
      flex-grow: 1;
    }
    :nth-last-child(-n + 2) {
      max-width: 152px;
      margin-left: 32px;
    }

    @media screen and (min-width: ${screenSize.desktop}) {
      width: auto;
      :not(:last-child) {
        margin-bottom: 0;
        margin-right: 16px;
      }
      :first-child {
        flex-grow: 1;
        width: 250px;
      }
      :nth-last-child(-n + 2) {
        width: 134px;
        margin-left: 0px;
      }
    }
  }
`;

export const WrapperTabletINPUT = styled.div`
  @media screen and (min-width: ${screenSize.tablet}) {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: ${screenSize.desktop}) {
    margin-top: 0px;
  }
`;
