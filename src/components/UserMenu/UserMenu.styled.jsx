import styled from 'styled-components';
import device from 'styles/deviceSize';
import { NavLink } from 'react-router-dom';

export const MenuHoverLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.inputBackground};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.inputBackground};
  }
  @media ${device.desktop} {
    margin-right: 6px;
  }
`;

export const LineStyled = styled.span`
  margin-right: 14px;
  @media ${device.tablet} {
    margin-right: 8px;
  }
  @media ${device.desktop} {
    margin-right: 14px;
  }
`;

export const UserNameStyled = styled.p`
  display: none;
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.mainFontColor};
  }
`;

export const LogoName = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  padding: 8px;
  border: none;
  background: ${({ theme }) => theme.colors.inputBackground};
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.mainFontColor};
  margin-right: 14px;
`;

export const ModalContainer = styled.div`
  padding: 28px 2px;
  width: 280px;
  @media ${device.tablet} {
    padding: 28px 13px;
    width: 394px;
  }
`;

export const ModalText = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainFontColor};
  margin-bottom: 20px;
  @media ${device.tablet} {
    margin-bottom: 24px;
  }
`;
export const ModalBtnBox = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
  @media ${device.tablet} {
    gap: 30px;
  }
`;

export const ModalBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px;
  background-color: ${({ theme }) => theme.colors.white};
  width: 97px;
  border: 1px solid ${({ theme }) => theme.colors.mainFontColor};
  :hover,
  :focus {
    border: none;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.accentColor};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  @media ${device.tablet} {
  }
`;

export const BtnLogOut = styled.button`
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;

export const UserMenuContainer = styled.div`
  display: flex;
  justify-content: end;
  @media ${device.tablet} {
    margin-right: 12px;
  }
`;

export const LinkBox = styled.div`
  display: flex;
  margin-left: auto;
  order: 1;
  @media ${device.tablet} {
    order: 2;
    margin: 0;
  }
`;
export const UserBox = styled.div`
  display: flex;
  order: 2;
  @media ${device.tablet} {
    order: 1;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const LogOutBox = styled.div`
  display: flex;
  order: 3;
`;
