import { createSlice } from '@reduxjs/toolkit';

import { logIn, logOut, loginWithGoogle } from '../auth/authOperation';
import {
  addBookPlanning,
  addBookReview,
  addFinishedPages,
  createBook,
  fetchCurrentUser,
  getBookPlanning,
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
  startDate: null,
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
      // console.log('fetchCurrentUser payload', payload);

      state.userData = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isFetchingCurrentUser = false;
      state.error = payload;
    },
    [logIn.fulfilled](state, action) {
      console.log('logIn payload', action.payload);
      state.userData = action.payload.userData;
    },
    [logOut.fulfilled](state) {
      // state.userData.currentlyReading = [];
      // state.userData.finishedReading = [];
      // state.startDate = null;
      // state.endDate = null;
      // state.stats = [];
      state.error = null;
    },
    [createBook.fulfilled](state, action) {
      // console.log('action.payload.newBook', action.payload);

      state.userData.goingToRead.push(action.payload);
    },
    [addBookPlanning.fulfilled](state, action) {
      state.userData.currentlyReading = action.payload.books;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
      state.pagesPerDay = action.payload.pagesPerDay;
    },

    [getBookPlanning.fulfilled](state, action) {
      // console.log('getBookPlanning', action.payload);
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

    // [addFinishedPages.fulfilled](state, action) {
    //   state.stats = action.payload.planning.stats;
    //   state.userData.currentlyReading.splice(
    //     state.currentlyReading.findIndex(
    //       book => book._id === action.payload.book._id
    //     ),
    //     1,
    //     action.payload.book
    //   );
    // },
    [addFinishedPages.fulfilled](state, action) {
      const currentlyReadingCopy = [...state.userData.currentlyReading];
      const index = currentlyReadingCopy.findIndex(
        book => book._id === action.payload.book._id
      );
      currentlyReadingCopy.splice(index, 1, action.payload.book);

      return {
        ...state,
        stats: action.payload.planning.stats,
        userData: {
          ...state.userData,
          currentlyReading: currentlyReadingCopy,
        },
      };
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
