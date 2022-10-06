import { configureStore } from '@reduxjs/toolkit'
import prizeNumberReducer from './Reducers/prizeNumberReducer'
import spinReducer from './Reducers/spinReducer'

export default configureStore({
    reducer: {
        prizeNumber: prizeNumberReducer,
        isSpin: spinReducer
    },
})