import styled from "styled-components";

// export const ModalContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.7);
//   z-index: 1;
// `;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 25px;
  background-color: white;
  border-radius: 4px;
  padding: 16px;
  width: 394px;
  height: 256px;
  
`;


// export const ModalHeader = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 16px;
//   /* border-bottom: 1px solid #e2e2e2; */
//   padding-bottom: 8px;
// `;

// export const ModalTitle = styled.p`
  
  
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 22px;
//   text-align: center;
//   /* deep blue */
//   color: #242a37;
// `;

export const ModalCloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: gray;
  cursor: pointer;
  font-size: 24px;
  margin-left: auto;
`;

export const ModalText = styled.p`

font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 1.38;
`;
export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
// export const ModalFooter = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 16px;
// `;

export const ModalButton = styled.button`
  width: 130px;
  height: 40px;
  padding: 5px;
  font-weight: 500;
//   margin-top: -210px;
  cursor: pointer;
  border: none;
  font-size: 14px;
  line-height: 1.21;
  box-shadow: ${({ theme }) => theme.shadows.instrustion};
  transition: ${({ theme }) => theme.transition};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.accentColor};
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;