import styled from 'styled-components';
import device from 'styles/deviceSize';

const Button = styled.button`
  display: flex;
  justify-content: center;
  padding: 13px;
  margin: 32px auto 32px auto;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  background: #ff6b08;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  background-color: #ff6b08;
  border: none;
  transition: border-radius 0.4s, box-shadow 0.4s;
  :hover {
    cursor: pointer;
    border-radius: 3px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  }
  @media ${device.tablet} {
    margin: 40px auto 40px auto;
    width: 200px;
  }
  @media ${device.desktop} {
  }
`;

export default Button;
