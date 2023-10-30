import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { logger } from '../middlewares';

import dataSlice from '../features/dataSlice';
import uiSlice from '../features/uiSlice';

const rootReducer = combineReducers({
  data: dataSlice,
  ui: uiSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export { store };
