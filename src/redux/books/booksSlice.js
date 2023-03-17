import { createSlice } from '@reduxjs/toolkit';

import { logIn, logOut, loginWithGoogle } from '../auth/authOperation';
import {
  addBookPlanning,
  addBookReview,
  addFinishedPages,
  createBook,
  fetchCurrentUser,
  getBookPlanning,
  userBooks,
} from './booksOperations';

const initialState = {
  userData: {
    name: null,
    email: '',
    goingToRead: [],
    currentlyReading: [],
    finishedReading: [],
    id: null,
  },
  endDate: null,
  pagesPerDay: null,
  stats: [],
  rating: null,

  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.userData = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isFetchingCurrentUser = false;
      state.error = payload;
    },
    [logIn.fulfilled](state, action) {
      state.userData.goingToRead = action.payload.userData.goingToRead;
      state.userData.currentlyReading =
        action.payload.userData.currentlyReading;
      state.userData.finishedReading = action.payload.userData.finishedReading;
    },
    [userBooks.fulfilled](state, action) {
      state.userData.goingToRead = action.payload.goingToRead;
      // state.currentlyReading = action.payload.currentlyReading;
      state.finishedReading = action.payload.finishedReading;
    },
    [logOut.fulfilled](state) {
      state.userData.goingToRead = [];
      state.userData.currentlyReading = [];
      state.userData.finishedReading = [];
      state.startDate = null;
      state.endDate = null;
      state.stats = [];
      state.error = null;
    },
    [createBook.fulfilled](state, action) {
      console.log('hello');

      state.userData.goingToRead.push(action.payload.newBook);
    },
    [addBookPlanning.fulfilled](state, action) {
      state.userData.currentlyReading = action.payload.books;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
      state.pagesPerDay = action.payload.pagesPerDay;
    },

    [getBookPlanning.fulfilled](state, action) {
      if (!action.payload) {
        return;
      }
      state.userData.currentlyReading = action.payload.planning.books.filter(
        book => book.pagesTotal !== book.pagesFinished
      );

      state.startDate = action.payload.planning.startDate;
      state.endDate = action.payload.planning.endDate;
      state.stats = action.payload.planning.stats;
      state.pagesPerDay = action.payload.planning.pagesPerDay;
    },

    [addFinishedPages.fulfilled](state, action) {
      state.stats = action.payload.planning.stats;
      state.userData.currentlyReading.splice(
        state.currentlyReading.findIndex(
          book => book._id === action.payload.book._id
        ),
        1,
        action.payload.book
      );
    },

    [loginWithGoogle.fulfilled](state, action) {
      state.userData.goingToRead = action.payload.data.goingToRead;
      state.userData.currentlyReading = action.payload.data.currentlyReading;
      state.userData.finishedReading = action.payload.data.finishedReading;
    },
    [addBookReview.fulfilled](state, action) {
      state.userData.finishedReading.splice(
        state.finishedReading.findIndex(
          book => book._id === action.payload._id
        ),
        1,
        action.payload
      );
    },
  },
});

export const booksReducer = booksSlice.reducer;
