import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from 'redux/book/book-selectors';
import { createBook } from 'redux/book/book-operations';
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

const LibraryForm = () => {
  const books = useSelector(getBooks);

  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(
      createBook({
        title: 'The Book of Five Rings',
        author: 'Miyamoto Musashi',
        publishYear: 1643,
        pagesTotal: 110,
      })
    );
  };
  const fetchB = () => {
    console.log(books);
  };

  return (
    <>
      <button onClick={onSubmit}>sss</button>
      <button onClick={fetchB}>fff</button>

      <StyledForm layout="vertical" autoComplete="off">
        <Wrapper>
          <FormItem name="title" label="Назва книги">
            <TitleInput placeholder="..." />
          </FormItem>
          <Box>
            <FormItem name="author" label="Автор книги">
              <AuthorInput placeholder="..." />
            </FormItem>
            <FormItem name="publication" label="Рік випуску">
              <StyledInput placeholder="..." />
            </FormItem>
            <FormItem name="pages" label="Кількість сторінок">
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
    </>
  );
};

export default LibraryForm;
