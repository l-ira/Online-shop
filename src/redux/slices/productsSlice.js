import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    'items/fetchProducts',
    async () => {
        try {
            const { data } = await axios.get('https://fakestoreapi.com/products')
            console.log(data)
            return data
        }
        catch (error) {
            console.log(error)
        }
    });

export const getProductFromCategories = createAsyncThunk('category/fetchProductFromCategories', async (category) => {
    try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        console.log('response categories', data)
        return data
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
    items: [],
}

const productSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.items = action.payload
        })
        builder.addCase(getProductFromCategories.fulfilled, (state, action) => {
            state.items = action.payload
        })
    },
})


export default productSlice.reducer