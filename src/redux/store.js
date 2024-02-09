import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import basketReducer from './slices/basketSlice'
import productReducer from './slices/productsSlice'
import categoriesReducer from './slices/categoriesSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        basketStore: basketReducer,
        items: productReducer,
        categories: categoriesReducer,
    },
})