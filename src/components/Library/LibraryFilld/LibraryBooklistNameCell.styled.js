import styled from 'styled-components';
import GreyBook from '../../../images/icons/GreyBook.svg';
import OrangeBook from '../../../images/icons/OrangeBook.svg';

const LibraryBooklistNameCell = styled.td`
  max-width: 200px;
  ::before {
    content: '';
    position: absolute;
    width: 22px;
    height: 17px;
    transform: translateX(-150%);
    background-image: ${props =>
      props.orange ? `url(${OrangeBook})` : `url(${GreyBook})`};
  }
`;

export default LibraryBooklistNameCell;
