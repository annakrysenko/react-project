import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  logIn,
  loginWithGoogle,
  logOut,
  register,
} from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, { payload }) {
      // console.log('payload===>', payload);
      // console.log('payload.data', payload.data);
      const { name, email } = payload.data.userData;
      state.user = { name, email };
      // console.log('state.user===>', state.user);
      // console.log('payload.data', payload.data);
      state.token = payload.data.accessToken;
      state.isLoggedIn = true;
    },
    [register.rejected](state, { payload }) {
      state.error = payload;
    },

    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.accessToken;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, { payload }) {
      state.error = payload;
    },

    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state, { payload }) {
      state.error = payload;
    },

    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isFetchingCurrentUser = false;
      state.error = payload;
    },

    [loginWithGoogle.fulfilled](state, { payload }) {
      state.token = payload.data.token;
    },
  },
});

export const authReducer = authSlice.reducer;
