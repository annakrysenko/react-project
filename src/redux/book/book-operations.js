import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const createBook = createAsyncThunk(
  'books/create',
  async (book, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/book', book);
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const fetchBooks = createAsyncThunk(
  'books/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/planning');
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export { createBook, fetchBooks };

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
