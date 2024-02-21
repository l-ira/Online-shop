import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: [],
    totalSum: 0,
    totalBasketCount: 0,
}

export const basketSlice = createSlice({
    name: 'basketSlice',
    initialState: initialState,
    reducers: {
        addProductBasketSlice: (state, action) => {
            const { id, title, price, count, image } = action.payload
            let findProductByID = state.basket.find((item) => item.id === action.payload.id);

            if (findProductByID) {
                findProductByID.count++;
                findProductByID.price += action.payload.price;
            } else {
                state.basket.push({ ...action.payload })
            }

            state.totalSum = state.basket.reduce((acc, item) => { return acc + item.price }, 0)

            state.totalBasketCount = state.basket.reduce((acc, item) => { return acc + item.count }, 0)
            console.log({ title: action.payload.title })
            localStorage.setItem(id, JSON.stringify({
                title,
                price,
                count,
                image
            }))
        },

        deleteProductBasketSlice: (state, action) => {
            let findProductByID = state.basket.find((item) => item.id === action.payload.id);

            if (findProductByID && findProductByID.count > 0) {
                findProductByID.count--;
                findProductByID.price -= action.payload.price;

                state.totalBasketCount--

                state.totalSum = (state.totalSum - action.payload.price).toFixed(2)
            }
        },
    }
}
)

export const { addProductBasketSlice, deleteProductBasketSlice } = basketSlice.actions
export default basketSlice.reducer