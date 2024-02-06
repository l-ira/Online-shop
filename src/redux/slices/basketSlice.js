import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
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

        },

    }
}
)

export const { addProductBasketSlice } = basketSlice.actions
export default basketSlice.reducer