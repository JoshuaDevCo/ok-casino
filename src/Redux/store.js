import { configureStore } from '@reduxjs/toolkit'
import prizeNumberReducer from './Reducers/prizeNumberReducer'
import spinReducer from './Reducers/spinReducer'
import chosenChipReducer from './Reducers/chosenChipReducer'
import myMoneyReducer from './Reducers/myMoneyReducer'
import historyRouletteResultsReducer from './Reducers/historyRouletteResultsReducer'
import rullerActionsReducer from './Reducers/rullerActionsReducer'
import dealerStatesReducer from './Reducers/dealerStatesReducer'
import turnPlayReducer from './Reducers/turnPlayReducer'
import cardsHandsReducer from './Reducers/cardsHandsReducer'
import backColorReducer from './Reducers/backColorReducer'

export default configureStore({
    reducer: {
        prizeNumber: prizeNumberReducer,
        isSpin: spinReducer,
        chosenChip: chosenChipReducer,
        myMoney: myMoneyReducer,
        historyRouletteResults: historyRouletteResultsReducer,
        rullerActions: rullerActionsReducer,
        dealerStates: dealerStatesReducer,
        turnPlay: turnPlayReducer,
        cardsHands: cardsHandsReducer,
        backColor: backColorReducer
    },
})