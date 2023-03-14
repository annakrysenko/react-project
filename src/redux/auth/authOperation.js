import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';
const token = {
    set(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    unset(token) {
        axios.defaults.headers.common['Authorization'] = '';
    },
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        console.log(credentials)
        try {
            const { data } = await axios.post('/auth/register', credentials);

            token.set(data.token);
            return data
        } catch (e) {
            toast.error('Please, try again!');
            return rejectWithValue(e.message);
        }
    },
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/auth/login', credentials);
            token.set(data.token);
            return data;
        } catch (e) {
            toast.error('Email or password is wrong, please try again!');
            return rejectWithValue(e.message);
        }
    },
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
    },
);

export const fetchCurretUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            token.set(persistedToken);
            const { data } = await axios.post('/users/current');
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);

export const loginWithGoogle = createAsyncThunk(
    'auth/loginwithgoogle',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/auth/google')
            token.set(credentials.data.token);
            return data;
        } catch (e) {
            return rejectWithValue(e)
        }
    },
);
