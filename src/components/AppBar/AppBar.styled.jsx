import styled from 'styled-components';
import device from 'styles/deviceSize';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 22px;
  height: 60px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.header};
  @media ${device.tablet} {
    padding: 0 32px;
  }
  @media ${device.desktop} {
    padding: 0 16px;
    max-width: 1280px;
  }
`;

export const LogoLink = styled(NavLink)`
  font-family: 'Abril Fatface';
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainFontColor};
`;
