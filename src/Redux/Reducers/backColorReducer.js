import { createSlice } from '@reduxjs/toolkit'

export const backColorReducer = createSlice({
  name: 'backColor',
  initialState: {
    colors: {
      place_button_1: { backColor: "black" },
      place_button_2: { backColor: "black" },
      place_button_3: { backColor: "black" }
    }
  },
  reducers: {
    setSpinBackColor: (state, action) => {
      switch (action.payload.state) {
        case "Win": {
          state.colors[action.payload.id].backColor = "green";
          break;
        }
        case "Bust": {
          state.colors[action.payload.id].backColor = "red";
          break;
        }
        default: {}
      }
    },
    resetAllColors: (state) => {
      state.colors.place_button_1.backColor = "black";
      state.colors.place_button_2.backColor = "black";
      state.colors.place_button_3.backColor = "black";
    }
  },
})

export const { setSpinBackColor, resetAllColors } = backColorReducer.actions

export default backColorReducer.reducer