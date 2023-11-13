import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import Product from '../component/interface'


interface ProductsState {
    products: Product[];
  }

const initialState: ProductsState = {
    products: [],
  };

  const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      setProducts: (state, action: PayloadAction<Product[]>) => {
        state.products = action.payload;
      },
    },
  });
  
  export const { setProducts } = productsSlice.actions;
  export default productsSlice.reducer;
  