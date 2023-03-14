import { Button, Form, Input } from 'antd';
import styled from 'styled-components';

export const FormItem = styled(Form.Item)`
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.2;
  }
  @media (min-width: 1200) {
    margin-right: 16px;
    margin-bottom: 0;
    :nth-child(2) {
      width: 150px;
    }
    :nth-child(3) {
      width: 150px;
    }
  }
  @media (min-width: 768) {
    :nth-child(2) {
      width: 152px;
    }
    :nth-child(3) {
      width: 152px;
    }
  }
`;

export const StyledInput = styled(Input)`
  height: 42px;
  border-radius: 0;
`;

export const TitleInput = styled(StyledInput)`
  @media (min-width: 1200) {
    width: 346px;
  }
`;

export const AuthorInput = styled(StyledInput)`
  @media (min-width: 768) {
    width: 336px;
  }
  @media (min-width: 1200) {
    width: 250px;
  }
`;

export const StyledBox = styled(Form.Item)`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
`;

export const StyledButton = styled(Button)`
  margin-left: auto;
  height: 42px;
  min-width: 170px;
  @media (min-width: 1200) {
    margin-top: 30px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  @media (max-width: 1279px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  @media (min-width: 768) {
    display: flex;
    gap: 32px;
  }
  @media (min-width: 1200) {
    display: flex;
    gap: 0px;
    margin-right: 32px;
  }
`;

export const StyledForm = styled(Form)`
  font-family: 'Montserrat';
  @media (min-width: 768) {
    margin-bottom: 40px;
  }
  @media (min-width: 1200) {
    display: flex;
    margin-bottom: 80px;
  }
`;
