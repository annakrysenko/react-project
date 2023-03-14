import { useDispatch } from 'react-redux';
// import { getBooks } from 'redux/book/book-selectors';
import { createBook } from 'redux/book/book-operations';
// import {
//   AuthorInput,
//   Box,
//   FormItem,
//   StyledBox,
//   StyledButton,
//   StyledForm,
//   StyledInput,
//   TitleInput,
//   Wrapper,
// } from './LibaryForm.styled';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import { useState } from 'react';

const LibraryForm = () => {
  // const books = useSelector(getBooks);

  const dispatch = useDispatch();

  const [title, SetTitle] = useState('');
  const [author, SetAthor] = useState('');
  const [publishYear, SetPublishYear] = useState('');
  const [pagesTotal, SetpagesTotal] = useState('');
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
        SetpagesTotal(value);
        break;
      }
      default: {
        return;
      }
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(title);
    dispatch(createBook({ title, author, publishYear, pagesTotal }));
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <input
        name="title"
        label="Book title"
        required
        onChange={handleChange}
        value={title}
        placeholder="..."
      />

      <input
        name="author"
        label="Author"
        onChange={handleChange}
        value={author}
      ></input>
      <input
        name="publishYear"
        label="Publication date"
        onChange={handleChange}
        value={publishYear}
        placeholder="..."
      ></input>
      <input
        name="totalPages"
        label="Amount of pages"
        onChange={handleChange}
        value={pagesTotal}
        placeholder="..."
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};
export default LibraryForm;
