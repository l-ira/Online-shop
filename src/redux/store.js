import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/basketSlice.ts'
import productReducer from './slices/productsSlice.ts'
import categoriesReducer from './slices/categoriesSlice.ts'

export const store = configureStore({
    reducer: {
        basketStore: basketReducer,
        items: productReducer,
        categories: categoriesReducer,
    },
})