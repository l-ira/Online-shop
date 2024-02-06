import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import basketReducer from './slices/basketSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        basketStore: basketReducer,
    },
})