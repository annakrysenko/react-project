import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { booksReducer } from './books/booksSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'userData', 'refreshToken', 'sid', 'endDate'],
};

const booksPersistConfig = {
  key: 'books',
  storage,
  whitelist: [
    'userData',
    'endDate',
    'pagesPerDay',
    'stats',
    'rating',
    'startDate',
  ],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    books: persistReducer(booksPersistConfig, booksReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
