import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';
export const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    // console.log(credentials);
    try {
      await axios.post('/auth/register', credentials);
      const { email, password } = credentials;
      const response = await axios.post('/auth/login', { email, password });
      token.set(response.data.accessToken);
      return response;
    } catch (e) {
      toast.error('Please, try again!');
      return rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      token.set(data.accessToken);
      return data;
    } catch (e) {
      toast.error('Email or password is wrong, please try again!');
      return rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/auth/logout');
      token.unset();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const loginWithGoogle = createAsyncThunk(
  'auth/loginwithgoogle',
  async (credentials, { rejectWithValue }) => {
    console.log('credentialsGoogle', credentials);
    try {
      const { data } = await axios.get('/auth/google');
      token.set(credentials.data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (sid, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      token.set(persistedToken);
      const { data } = await axios.post('/auth/refresh', sid);
      token.set(data.newAccessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'user/books',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('user/books');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
