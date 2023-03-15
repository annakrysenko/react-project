import styled from 'styled-components';
import { Link } from 'react-router-dom';

import listStyleImage from '../../images/svg/list-style-image.svg';
import device from 'styles/deviceSize';
import theme from 'styles/theme';

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};

  @media ${device.mobile} {
    padding: 16px 46px;
  }

  @media ${device.tablet} {
    padding: 71px 121px;
  }

  @media ${device.desktop} {
    padding: 266px 167px;
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

  @media ${device.desktop} {
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

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const LinkStyled = styled(Link)`
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

// export const ButtonOrange = styled(ButtonWhite)`
//   border: none;
//   margin-left: 16px;
//   color: ${({ theme }) => theme.colors.white};
//   background: ${({ theme }) => theme.colors.accentColor};
// `;