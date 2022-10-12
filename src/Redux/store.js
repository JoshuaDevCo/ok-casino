import { configureStore } from '@reduxjs/toolkit'
import prizeNumberReducer from './Reducers/prizeNumberReducer'
import spinReducer from './Reducers/spinReducer'
import chosenChipReducer from './Reducers/chosenChipReducer'
import myMoneyReducer from './Reducers/myMoneyReducer'
import historyRouletteResultsReducer from './Reducers/historyRouletteResultsReducer'

export default configureStore({
    reducer: {
        prizeNumber: prizeNumberReducer,
        isSpin: spinReducer,
        chosenChip: chosenChipReducer,
        myMoney: myMoneyReducer,
        historyRouletteResults: historyRouletteResultsReducer
    },
})