// import Container from 'components/Container/Container.styled';
import styled from 'styled-components';

export const WrapperOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const WrapperModal = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;
