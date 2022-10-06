import { createSlice } from '@reduxjs/toolkit'

export const spinReducer = createSlice({
  name: 'isSpin',
  initialState: {
    value: false,
  },
  reducers: {
    setSpin: (state) => {
      state.value = !state.value
    }
  },
})

export const { setSpin } = spinReducer.actions

export default spinReducer.reducer