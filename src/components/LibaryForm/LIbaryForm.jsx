import {
  AuthorInput,
  Box,
  FormItem,
  StyledBox,
  StyledButton,
  StyledForm,
  StyledInput,
  TitleInput,
  Wrapper,
} from './LibaryForm.styled';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';

const LibraryForm = () => {
  // const dispatch = useDispatch();
  const [title, SetTitle] = useState('');
  const [author, SetAthor] = useState('');
  const [publishYear, SetPublishYear] = useState('');
  const [totalPages, SetTotalPages] = useState('');
  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'title': {
        SetTitle(value);
        break;
      }
      case 'author': {
        SetAthor(value);
        break;
      }
      case 'publishYear': {
        SetPublishYear(value);
        break;
      }
      case 'totalPages': {
        SetTotalPages(value);
        break;
      }
      default: {
        return;
      }
    }
  };

  const handleSubmit = (evt) => {
        evt.preventDefault();
      // dispatch(addContact({ title,author,publishYear,totalPages}));
     
      };

  return (
    <StyledForm layout="vertical" autoComplete="off" onSubmit={handleSubmit}>
      <Wrapper>
        <FormItem name="title" label="Book title" required
                onChange={handleChange}
                value={title}>
          <TitleInput placeholder="..." />
        </FormItem>
        <Box>
          <FormItem name="author" label="Author" onChange={handleChange}
                value={author} >
            <AuthorInput placeholder="..." />
          </FormItem>
          <FormItem name="publishYear" label="Publication date" onChange={handleChange} value={publishYear} >
            <StyledInput placeholder="..." />
          </FormItem>
          <FormItem name="totalPages" label="Amount of pages" onChange={handleChange} value={totalPages}>
            <StyledInput placeholder="..." />
          </FormItem>
        </Box>
      </Wrapper>
      <StyledBox>
        <StyledButton disabled="" type="submit">
          Додати
        </StyledButton>
      </StyledBox>
    </StyledForm>
  );
};

export default LibraryForm;
