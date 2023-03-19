import styled from 'styled-components';
import { Button } from 'antd';
import device from 'styles/deviceSize';

// const StyledButton = styled(Button)`
//   display: block;
//   min-width: 200px;
//   min-height: 40px;
//   margin-left: auto;
//   margin-right: auto;
//   font-weight: 600;
//   font-size: 16px;
//   line-height: 1.25;
//   @media ${device.mobile} {
//     margin-bottom: 128px;
//   }
// `;

// export default StyledButton;

const StyledBtn = styled(Button)`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  min-height: 40px;
  min-width: 80px;
  border: none;
  border-radius: 0;
  background-color: #6d7a8d;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  :hover,
  :focus {
    background-color: #898f9f;
  }
  @media ${device.desktop} {
    min-width: 130px;
  }
`;

export default StyledBtn;
