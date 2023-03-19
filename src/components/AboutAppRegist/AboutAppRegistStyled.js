import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import listStyleImage from '../../images/svg/list-style-image.svg';
import device from 'styles/deviceSize';
import theme from 'styles/theme';

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: ${theme.colors.white};

  @media ${device.mobile} {
    padding: 32px 25px 40px;
  }

  @media ${device.tablet} {
    padding: 64px 159px 88px;
  }

  @media ${device.desktop} {
    padding: 179px 127px 239px;
  }
`;

export const SubtitleStyled = styled.h2`
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 1.12;

  @media ${device.mobile} {
    margin-bottom: 32px;
  }

  @media ${device.tablet} {
    margin-bottom: 48px;
  }
`;

export const Hstyled = styled.h3`
  align-self: flex-start;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;
`;

export const ListSlyled = styled.ul`
  align-self: flex-start;
  list-style-image: url(${listStyleImage});
`;

export const LiStyled = styled.li``;

export const LinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 40px;
  margin-top: 60px;
  padding: 5px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid #000000;
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.mainFontColor};
  box-shadow: ${p => p.theme.shadows.hero};
  transition: ${p => p.theme.transition.transitionFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.hover};
    box-shadow: ${p => p.theme.shadows.google};
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
`;

export const BtnAboutApp = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 40px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.mainFontColor};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #000000;
  :hover,
  :focus {
    background: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.white};
    border: none;
  }
`;
