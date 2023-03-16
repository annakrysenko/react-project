import styled from 'styled-components';
import GreyBook from '../../../images/icons/GreyBook.svg';
import OrangeBook from '../../../images/icons/OrangeBook.svg';

const LibraryBooklistTabletBodyCell = styled.td`
  text-align: ${props => (props.right ? 'right' : 'left')};
  vertical-align: ${props => props.middle && 'middle'};
  padding-left: ${props => props.ratingPadding && '32px'};
  padding-right: ${props => props.yearPadding && '36px'};
  padding-left: ${props => props.authorPadding && '21px'};
  padding-left: ${props => props.booknamePadding && '60px'};
  padding: ${props => props.booknameFullPadding && '14px 0 14px 60px'};
  padding: ${props => props.buttonPadding && '11px 20px 11px 0'};
  padding-right: ${props => props.pagesPadding && '20px'};
  display: ${props => props.buttonPadding && 'flex'};
  justify-content: ${props => props.buttonPadding && 'flex-end'};
  max-width: ${props => props.tabletBooknameWidth && '255px'};

  :first-child {
    ::before {
      content: '';
      position: absolute;
      width: 22px;
      height: 17px;
      transform: translateX(-150%);
      background-image: ${props =>
        props.orange ? `url(${OrangeBook})` : `url(${GreyBook})`};
    }
  }

  @media screen and (min-width: 1280px) {
    padding-left: ${props => props.ratingPadding && '110px'};
    padding-right: ${props => props.yearPadding && '73px'};
    padding-left: ${props => props.authorPadding && '41px'};
    padding: ${props => props.booknameFullPadding && '22px 0 23px 60px'};
    padding-right: ${props => props.pagesPadding && '77px'};
    padding: ${props => props.buttonPadding && '11px 80px 11px 0'};
    max-width: ${props => props.tabletBooknameWidth && '500px'};
  }
`;

export default LibraryBooklistTabletBodyCell;
