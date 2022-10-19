import { createSlice } from '@reduxjs/toolkit'
import { getNextCard } from "./../../Components/BlackJack/Cards/functions"

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
      console.log("state: " + state);
      console.log("action: " + action);
      state.cardsOnTable[action.payload].push(getNextCard());
    },
  },
})

export const { resetCardsOnBlackJackTable, addNewCardsToHand } = cardsHandsReducer.actions

export default cardsHandsReducer.reducer