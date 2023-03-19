import { createAction, createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  loginWithGoogle,
  register,
  logOut,
  refreshUser,
} from './authOperation';

const initialState = {
  userData: {
    name: null,
    email: '',
    id: null,
  },
  token: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  isRefreshing: false,
  isRegistratedIn: false,

  error: null,
};
export const addAccessToken = createAction('auth/addtoken');
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [addAccessToken](state, { payload }) {
      state.token = payload;
    },
    [register.fulfilled](state, { payload }) {
      const { name, email } = payload.data.userData;
      state.userData = { name, email };
      state.token = payload.data.accessToken;
      state.isLoggedIn = true;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
    },
    [register.rejected](state, { payload }) {
      state.error = payload;
    },

    [register.rejected](state, { payload }) {
      state.error = payload;
    },

    [logIn.fulfilled](state, { payload }) {
      state.userData = payload.userData;
      state.token = payload.accessToken;
      state.isLoggedIn = true;
      state.refreshToken = payload.refreshToken;
      state.sid = payload.sid;
    },
    [logIn.rejected](state, { payload }) {
      state.error = payload;
    },

    [logOut.fulfilled](state) {
      state.userData = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.refreshToken = null;
    },
    [logOut.rejected](state, { payload }) {
      state.error = payload;
    },
    [loginWithGoogle.fulfilled](state, { payload }) {
      state.token = payload.data.token;
      state.refreshToken = payload.refreshTokenParams;
      state.sid = payload.sidParams;
      state.isLoggedIn = true;
      state.userData.name = payload.data.name;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.accessToken = action.payload.newAccessToken;
      state.refreshToken = action.payload.newRefreshToken;
      state.sid = action.payload.newSid;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});
// export const { addAccessToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
