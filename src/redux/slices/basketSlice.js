import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState: initialState,
    reducers: {
        addProductBasketSlice: (state, action) => {
            console.log(action)
        },

    }
}
)

export const { addProductBasketSlice } = basketSlice.actions
export default basketSlice.reducer