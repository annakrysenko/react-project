import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const authReducer = () => [];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],

  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
