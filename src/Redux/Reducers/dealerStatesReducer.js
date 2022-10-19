import { createSlice } from '@reduxjs/toolkit'

export const dealerStatesReducer = createSlice({
    name: 'dealerStates',
    initialState: {
        hide: true,
    },
    reducers: {
        setHiding: (state) => {
            state.hide = !state.hide
        }
    },
})

export const { setHiding } = dealerStatesReducer.actions

export default dealerStatesReducer.reducer