import { createSlice } from '@reduxjs/toolkit'
import { roulette } from "../../Roulette/Spinner/rouletteOptions"

export const prizeNumberReducer = createSlice({
  name: 'prizeNumber',
  initialState: {
    value: null,
  },
  reducers: {
    spinNewPrizeNumber: (state) => {
      const newRandomNumber = Math.floor((Math.random() * (roulette.length)))
      state.value = newRandomNumber
    }
  },
})

export const { spinNewPrizeNumber } = prizeNumberReducer.actions

export default prizeNumberReducer.reducer