import { createAction, createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  logIn,
  loginWithGoogle,
  register,
  logOut,
} from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
  isRegistratedIn: false,
};
export const addAccessToken = createAction('auth/addtoken');
const authSlice = createSlice({
  name: 'auth',
  initialState,
  // reducers: {
  //   addAccessToken: (state, { payload }) => {

  //     state.token = payload;
  //   },
  // },

  extraReducers: {
    [addAccessToken](state, { payload }) {
      state.token = payload;
    },
    [register.fulfilled](state, { payload }) {
      console.log(payload.data.userData);
      const { name, email } = payload.data.userData;
      state.user = { name, email };
      state.token = payload.data.accessToken;
      state.isLoggedIn = true;
    },
    [register.rejected](state, { payload }) {
      state.error = payload;
    },

    [register.rejected](state, { payload }) {
      state.error = payload;
    },

    [logIn.fulfilled](state, { payload }) {
      console.log(payload.userData);
      const { name, email } = payload.userData;
      state.user = { name, email };
      state.token = payload.accessToken;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, { payload }) {
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
// export const { addAccessToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
