import { createSlice } from '@reduxjs/toolkit'
import { getGameTurns } from "./../../Components/BlackJack/Calculator"

export const turnPlayReducer = createSlice({
    name: 'turnPlay',
    initialState: {
        players: [],
        currentPlayer: undefined,
        index: undefined
    },
    reducers: {
        oredrPlayers: (state) => {
            state.players = getGameTurns();
            state.index = 0;
            state.currentPlayer = state.players[state.index];
        },
        getNextTurn: (state) => {
            state.index += 1
            state.currentPlayer = state.players[state.index];
        }
    },
})

export const { getNextTurn, oredrPlayers } = turnPlayReducer.actions

export default turnPlayReducer.reducer