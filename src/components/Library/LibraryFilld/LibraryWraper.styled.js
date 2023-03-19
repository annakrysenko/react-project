import styled from 'styled-components';
import device from 'styles/deviceSize';

const LibraryWraper = styled.div`
  padding: 0 20px;

  @media ${device.desktop} {
    padding: 0 16px;
  }
`;

export default LibraryWraper;
