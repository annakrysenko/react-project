import styled from 'styled-components';
import device from 'styles/deviceSize';

export const ResumeTitle = styled.div`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: #242a37;
  font-family: 'Montserrat';
`;

export const ButtonBlock = styled.div`
gap: 28px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 767px) {
    width: 100%;
    justify-content: space-around;
  }
`;

export const ConteinerModal = styled.div`
  width: 560px;
  padding: 20px 20px 40px 20px;

  @media screen and (max-width: 767px) {
    width: 240px;
  }
`;

export const InputModal = styled.div`
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: #242a37;
  font-family: 'Montserrat';
`;

export const ModalWripper = styled.div`
  background-color: white;
  box-shadow: 10px 10px 20px rgba(9, 30, 63, 0.2);
  margin-top: 20px;
`;

export const RaitingBlok = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RaitingStar = styled.div`
  margin-bottom: 20px;
`;

export const ButtonModal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ff6b08;
  color: #fff;
  width: 130px;
  height: 40px;
  font-family: 'Montserrat';
  font-weight: 500;
  line-height: 1.2;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ff6b08;
  margin: 0 auto;

  :hover {
    color: #242a37;
    background-color: #fff;
    border: 1px solid #242a37;
  }

  @media screen and (max-width: 767px) {
    width: 97px;
  }

  @media ${device.tablet} {
    width: 200px;
    margin-top: 50px;
  }
`;
