import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketSlice'
import productReducer from './slices/productsSlice'
import categoriesReducer from './slices/categoriesSlice'

export const store = configureStore({
    reducer: {
        basketStore: basketReducer,
        items: productReducer,
        categories: categoriesReducer,
    },
})