import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface FlagState {
    flag: boolean;
  }

const initialState: FlagState = {
    flag:false,
  };

  const flagSlice = createSlice({
    name: 'flagData',
    initialState,
    reducers: {
      setFlag: (state, action: PayloadAction<boolean>) => {
        state.flag = action.payload;
      },
    },
  });
  
  export const { setFlag } = flagSlice.actions;
  export default flagSlice.reducer;
  
