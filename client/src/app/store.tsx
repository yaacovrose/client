import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './dataSlice'
import flagReducer from './flagSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    flag: flagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

