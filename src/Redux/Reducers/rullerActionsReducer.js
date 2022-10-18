import { createSlice } from '@reduxjs/toolkit'

export const rullerActionsReducer = createSlice({
    name: 'rullerActions',
    initialState: {
        value: "Starting",
        buttons: ["Stand", "Hit", "Double"]
    },
    reducers: {
        setRullerActions: (state, action) => {
           switch(action.payload){
                case "Starting": {
                    state.value = "Starting";
                    state.buttons = ["Deal"]
                    break;
                }
                case "Betting": {
                    state.value = "Betting";
                    state.buttons = ["Deal", "Clear"]
                    break;
                }
                case "Playing": {
                    state.value = "Playing";
                    state.buttons = ["Stand", "Hit", "Double"]
                    break;
                }
                case "GameOver": {
                    state.value = "GameOver";
                    state.buttons = ["New Bet"]
                    break;
                }
                default: {}
           }
        }
    },
})

export const { setRullerActions } = rullerActionsReducer.actions

export default rullerActionsReducer.reducer