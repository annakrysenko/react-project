import { createSlice } from '@reduxjs/toolkit';
import { createBook } from './bookOperations';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [createBook.fulfilled](state, { payload }) {
      console.log(payload);
      state.books.push(payload);
    },

    // [deleteBook.fulfilled](state, action) {
    //   return state.filter(item => item._id !== action.payload._id);
    // },
    // [fetchBookById.fulfilled](state, action) {
    //   return state.filter(book => book._id === action.payload._id);
    // },
    // [updateBookReview.fulfilled](state, action) {
    //   state = state.map(book =>
    //     book._id === action.payload._id ? action.payload : book
    //   );
    // },
    // [logOut.fulfilled]() {
    //   return [];
    // },
  },
});

export const booksReducer = booksSlice.reducer;
