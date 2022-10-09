import { createSlice } from '@reduxjs/toolkit'

export const myMoneyReducer = createSlice({
  name: 'myMoney',
  initialState: {
    value: 5000,
  },
  reducers: {
    increaseMyMoney: (state, action) => {
      state.value += action.payload
    },
    decreaseMyMoney: (state, action) => {
      state.value -= action.payload
      if (state.value < 0) state.value = 0
    }
  },
})

export const { increaseMyMoney, decreaseMyMoney } = myMoneyReducer.actions

export default myMoneyReducer.reducer