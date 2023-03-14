

import { createSlice } from '@reduxjs/toolkit';
import { fetchCurretUser, logIn, loginWithGoogle, logOut, register } from "./authOperation";


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
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;

        },
        [register.rejected](state, { payload }) {
            state.error = payload;
        },

        [logIn.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
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

        [fetchCurretUser.pending](state) {
            state.isFetchingCurrentUser = true;
        },
        [fetchCurretUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [fetchCurretUser.rejected](state, { payload }) {
            state.isFetchingCurrentUser = false;
            state.error = payload;
        },

        [loginWithGoogle.fulfilled](state, { payload }) {
            state.token = payload.data.token;
        },
    },
});

export const authReducer = authSlice.reducer

