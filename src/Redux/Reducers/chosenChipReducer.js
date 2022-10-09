import { createSlice } from '@reduxjs/toolkit'

export const chosenChipReducer = createSlice({
    name: 'chosenChip',
    initialState: {
        color: null,
        value: 0
    },
    reducers: {
        setChosenChip: (state, action) => {
            state.color = action.payload;
            switch (action.payload) {
                case "red": {
                    state.value = 10; break;
                }
                case "green": {
                    state.value = 100; break;
                }
                case "blue": {
                    state.value = 250; break;
                }
                case "black": {
                    state.value = 500; break;
                }
                default: { }
            }
        }
    },
})

export const { setChosenChip } = chosenChipReducer.actions

export default chosenChipReducer.reducer