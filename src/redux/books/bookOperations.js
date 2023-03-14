import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const createBook = createAsyncThunk(
  'books/create',
  async (book, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/book', book);
      return resp.data.newBook;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export { createBook };

// const deleteBook = createAsyncThunk(
//   'books/delete',
//   async (bookId, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.delete(`/books/${bookId}`);
//       return data.data.book;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );

// const fetchBookById = createAsyncThunk(
//   'books/getById',
//   async (bookId, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(`/books/${bookId}`);
//       return data.data.book;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );

// const updateBookReview = createAsyncThunk(
//   'books/review',
//   async ({ bookId, review }, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.patch(`/books/${bookId}/review`, review);
//       return data.data.book;
//     } catch (error) {
//       rejectWithValue(error);
//     }
//   }
// );

// fetchBooks,
// createBook,
// deleteBook,
// fetchBookById,
// updateBookReview,
