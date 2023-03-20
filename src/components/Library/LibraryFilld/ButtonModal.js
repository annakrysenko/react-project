import styled from 'styled-components';
import device from 'styles/deviceSize';

const ButtonModal = styled.div`
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
  // margin-right: 16px;
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

export default ButtonModal;
