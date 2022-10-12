import { createSlice } from '@reduxjs/toolkit'

export const historyRouletteResultsReducer = createSlice({
  name: 'historyRouletteResults',
  initialState: {
    value: [],
  },
  reducers: {
    addNewResult: (state, action) => {
      state.value.push(action.payload);
      if (state.value.length > 10) {
        state.value.shift();
      }
    },
  },
})

export const { addNewResult } = historyRouletteResultsReducer.actions

export default historyRouletteResultsReducer.reducer