import styled from 'styled-components';

export const ResumeTitle = styled.div`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: #242a37;
  font-family: 'Montserrat';
`;

export const ButtonBlock = styled.div`
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
  // width: -webkit-fill-available;
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
