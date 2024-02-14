import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    totalSum: 0,
}

export const basketSlice = createSlice({
    name: 'basketSlice',
    initialState: initialState,
    reducers: {
        addProductBasketSlice: (state, action) => {
            let findProductByID = state.basket.find((item) => item.id === action.payload.id);

            if (findProductByID) {
                findProductByID.count++;
                findProductByID.price += action.payload.price;
            } else {
                state.basket.push({ ...action.payload })
            }
            state.totalSum = state.basket.reduce((acc, item) => { return acc + item.price }, 0)
        },

    }
}
)

export const { addProductBasketSlice } = basketSlice.actions
export default basketSlice.reducer