import styled from 'styled-components';
// import device from 'styles/deviceSize';
import theme from 'styles/theme';

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