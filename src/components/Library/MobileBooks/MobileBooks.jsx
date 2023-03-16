import { ReactComponent as BookOrange } from '../BooksIcon/Flat.svg';
import { ReactComponent as BookGrey } from '../BooksIcon/Group.svg';

import { Rate } from 'antd';
import EllipsisText from 'react-ellipsis-text';
import {
  Box,
  PropertyName,
  StyledBookTitle,
  StyledButton,
  StyledIconBox,
  StyledItem,
  StyledList,
  StyledText,
  StyledTitle,
  Wrapper,
} from './MobileBooks.styled';
import Modal from 'components/Modal/Modal';
import RatingModal from 'components/Library/Modal/ResumeModal';
import useMobileTable from './useMobileTable';

const MobileTable = ({ title, status, data }) => {
  const { setBookId, toggleModal, isModalVisible, onModalClose, bookId } =
    useMobileTable();

  return (
    <Wrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {data.map(item => (
          <StyledItem key={item._id}>
            <StyledIconBox>
              {status ? <BookOrange /> : <BookGrey />}
            </StyledIconBox>

            <div>
              <StyledBookTitle>
                <EllipsisText text={item?.title} length={50} />
              </StyledBookTitle>
              <Box>
                <PropertyName>Author:</PropertyName>
                <StyledText>{item?.author}</StyledText>
              </Box>
              <Box>
                <PropertyName>Year:</PropertyName>
                <StyledText>{item?.publication}</StyledText>
              </Box>
              <Box>
                <PropertyName>Pages:</PropertyName>
                <StyledText>{item?.pages}</StyledText>
              </Box>
              {item.rating && (
                <>
                  <Box>
                    <PropertyName>Rating:</PropertyName>
                    <Rate
                      style={{ width: '120px', fontSize: '17px' }}
                      disabled
                      value={item?.rating}
                    />
                  </Box>
                  <StyledButton
                    onClick={() => {
                      setBookId(item?._id);
                      toggleModal();
                    }}
                  >
                    Resume
                  </StyledButton>
                </>
              )}
            </div>
          </StyledItem>
        ))}
      </StyledList>
      {isModalVisible && (
        <Modal onClose={onModalClose}>
          <RatingModal onClose={onModalClose} bookId={bookId} />
        </Modal>
      )}
    </Wrapper>
  );
};

export default MobileTable;