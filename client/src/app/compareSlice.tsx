import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Compare {
  productId1: string;
  productId2: string;
  isProduct: string;
}

const initialState: Compare = {
  productId1: '',
  productId2: '',
  isProduct: 'no'
};

const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    current_1: (state, action: PayloadAction<Compare>) => {
      state.productId1 = action.payload.productId1;
    },
    current_2: (state, action: PayloadAction<Compare>) => {
      state.productId2 = action.payload.productId2
    },
    
  },
});

export const { current_1, current_2 } = compareSlice.actions;
export default compareSlice.reducer;

