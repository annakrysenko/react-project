import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.section`
  padding: 5px 20px;
  @media screen and (min-width: 768px) {
    padding: 8px 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 25px 16px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TitleH2 = styled.h2`
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: #242a37;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const Table = styled.table`
  width: 100%;
  background: #ffffff;
  margin-bottom: 32px;
  text-align: left;
  background: #f6f7fb;
  border-spacing: 0px 5px;
  th:last-child,
  td:last-child {
    text-align: right;
    padding-right: 23px;
  }
`;

export const Tr = styled.tr`
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: white;
  height: 62px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
`;

export const TrHead = styled.tr`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #898f9f;
`;

export const EmptyPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #898f9f;
  line-height: 1.21;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavLinkMore = styled(NavLink)`
  position: fixed;
  bottom: 12px;
  left: 44%;
  z-index: 999;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const ButtonMyTrain = styled(NavLink)`
  width: 171px;
  height: 42px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 28px;
  margin-bottom: 128px;
  background: #ff6b08;
  color: #ffffff;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 16px;
  line-height: 1.25;
  padding: 10px 15px;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 200px;
    height: 40px;
  }
`;

export const UlMobile = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
`;

export const LiMobile = styled.li`
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
`;

export const H3Mobile = styled.h3`
  display: flex;
  gap: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  color: #242a37;
  margin-top: 0px;
  margin-bottom: 12px;
`;

export const PMobile = styled.div`
  padding-left: 34px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  color: #242a37;
`;

export const SpanMobile = styled.span`
  display: inline-block;
  width: 81px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.25;
  color: #898f9f;
`;

export const Button = styled.button`
  width: 127px;
  height: 40px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 6px;
  background: #6d7a8d;
  border: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 80px;
    margin-left: 0px 20px 0px 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 130px;
  }
`;

export const SpanIconBook = styled.span`
  display: flex;
  margin-left: 23px;
  gap: 18px;
  @media screen and (min-width: 768px) {
  }
`;



// export const ButtonModal = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: #ff6b08;
//   color: #fff;
//   width: 130px;
//   height: 40px;
//   font-family: 'Montserrat';
//   font-weight: 500;
//   line-height: 1.2;
//   font-size: 14px;
//   align-items: center;
//   justify-content: center;
//   // margin-right: 16px;
//   cursor: pointer;
//   border: 1px solid #ff6b08;
//   margin: 0 auto;

//   :hover {
//     color: #242a37;
//     background-color: #fff;
//     border: 1px solid #242a37;
//   }

//   @media screen and (max-width: 767px) {
//     width: 97px;
//   }

//   @media ${device.tablet} {
//     width: 200px;
//     margin-top: 50px;
//   }
// `;