import {createSlice} from '@reduxjs/toolkit'

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
      setFlag: (state) => {
        state.flag = !state.flag
      },
    },
  });
  
  export const { setFlag } = flagSlice.actions;
  export default flagSlice.reducer;
  
