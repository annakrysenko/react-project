import styled from 'styled-components';
import device from 'styles/deviceSize';
import { NavLink } from 'react-router-dom';

export const HoverBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.inputBackground};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.inputBackground};
  }
`;

export const HomeLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  width: 33px;
  height: 33px;
  border-radius: 50%;
`;

export const LibraryLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

export const LineStyled = styled.span`
  margin-right: 12px;
`;

export const UserNameStyled = styled.p`
  display: none;
  @media ${device.tablet} {
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.mainFontColor};
  }
`;

export const LogoName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.inputBackground};
`;
