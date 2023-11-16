import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface FlagState {
    flag: boolean;
    name: string;
  }

const initialState: FlagState = {
    flag: false,
    name: '',
  };

  const flagSlice = createSlice({
    name: 'flagData',
    initialState,
    reducers: {
      setFlag: (state, action: PayloadAction<boolean>) => {
        state.flag = action.payload;
      },
      setName: (state, action: PayloadAction<string>) => {
        state.name = action.payload;
      },
    },
  });
  
  export const { setFlag, setName } = flagSlice.actions;
  export default flagSlice.reducer;
  
