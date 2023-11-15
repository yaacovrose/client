import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './dataSlice'
import flagReducer from './flagSlice'
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    flag: flagReducer,
    cart: cartReducer

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

