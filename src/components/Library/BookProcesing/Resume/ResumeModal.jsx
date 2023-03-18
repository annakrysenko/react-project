import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { ButtonModal } from 'components/Library/BooksTable-TO_DELETE/BooksTable.styled.jsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookReview } from 'redux/books/booksOperations';
import {
  ButtonBlock,
  InputModal,
  ModalTitle,
  RaitingBlok,
  RaitingStar,
  ResumeTitle,
} from './Resume.styled.js';

function ResumeModal({ toggleModal, bookId }) {
  console.log('id', bookId);
  const [newValue, setNewValue] = useState(null);
  const [coment, setComent] = useState('');

  const dispatch = useDispatch();

  const typeOfChange = {
    'simple-controlled': setNewValue,
    review: setComent,
  };

  const handleChange = ({ target: { name, value } }) => {
    typeOfChange[name](value);
  };

  const handleAddReview = () => {
    if ((newValue, coment)) {
      dispatch(
        addBookReview({
          bookId: bookId,
          rating: newValue,
          feedback: coment,
        })
      );
      toggleModal();
      setNewValue(null);
      setComent('');
    }
    alert('чогось не вистачає');
  };

  return (
    <>
      <ModalTitle>Choose rating of the book</ModalTitle>
      <RaitingBlok>
        <RaitingStar>
          <Typography component="legend"></Typography>
          <Rating
            name="simple-controlled"
            value={+newValue}
            onChange={handleChange}
          />
        </RaitingStar>
        <ResumeTitle>
          <label htmlFor="content">Resume</label>
        </ResumeTitle>
        <InputModal>
          <textarea
            style={{ width: '100%' }}
            onChange={handleChange}
            rows="10"
            cols="50"
            id="content"
            name="review"
          ></textarea>
        </InputModal>
      </RaitingBlok>
      <ButtonBlock>
        <ButtonModal type="button" onClick={toggleModal}>
          Back
        </ButtonModal>
        <ButtonModal type="button" onClick={handleAddReview}>
          Save
        </ButtonModal>
      </ButtonBlock>
    </>
  );
}

export default ResumeModal;
