import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'redux/auth/authOperation';

export const fetchCurrentUser = createAsyncThunk(
  'books/fetchCurrentUser',
  async (_, thunkAPI) => {
    // console.log('ffff');
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistedToken);
      const { data } = await axios.get('/user/books');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const createBook = createAsyncThunk(
  'books/create',
  async (book, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/book', book);
      return resp.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addBookReview = createAsyncThunk(
  'books/addBookReview',
  async ({ bookId, ...reviewData }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/book/review/${bookId}`, reviewData);
      // console.log('addBookReview====>', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBookPlanning = createAsyncThunk(
  'books/addBookPlanning',
  async (planningData, thunkAPI) => {
    try {
      const { data } = await axios.post('/planning', planningData);
      // console.log('addBookPlanning:', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBookPlanning = createAsyncThunk(
  'books/getBookPlanning',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/planning');
      // console.log('getBookPlanning====>', data);
      return data;
    } catch (error) {
      return;
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFinishedPages = createAsyncThunk(
  'books/addFinishedPages',
  async (pages, thunkAPI) => {
    // console.log('pages', pages);
    try {
      const { data } = await axios.patch('/planning', pages);
      // console.log('addFinishedPages====>', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
