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
  return (
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
  );
};

export default LibraryForm;
