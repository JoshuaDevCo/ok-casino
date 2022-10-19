import { createSlice } from '@reduxjs/toolkit'
import { getNextCard, sumMyHand } from "./../../Components/BlackJack/Cards/functions"

export const cardsHandsReducer = createSlice({
  name: 'cardsHands',
  initialState: {
    cardsOnTable: {
      place_button_1: [],
      place_button_2: [],
      place_button_3: [],
      dealer: []
    }
  },
  reducers: {
    resetCardsOnBlackJackTable: (state) => {
      state.cardsOnTable = {
        place_button_1: [],
        place_button_2: [],
        place_button_3: [],
        dealer: []
      }
    },
    addNewCardsToHand: (state, action) => {
      state.cardsOnTable[action.payload].push(getNextCard());
    },
    addCardsToDealer: (state) => {
      while (sumMyHand(state.cardsOnTable.dealer) < 17) {
        state.cardsOnTable.dealer.push(getNextCard());
      }
    },
  },
})

export const { resetCardsOnBlackJackTable, addNewCardsToHand, addCardsToDealer } = cardsHandsReducer.actions

export default cardsHandsReducer.reducer