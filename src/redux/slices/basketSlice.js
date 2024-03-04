import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalBasketCount: 0,
    basketLS: [],
}

export const basketSlice = createSlice({
    name: 'basketSlice',
    initialState: initialState,
    reducers: {
        addProductBasketSlice: (state, action) => {
            const { id, title, price, count, image } = action.payload

            localStorage.setItem(id, JSON.stringify({
                title,
                price,
                count,
                image
            }))

            const keyIdLS = Object.keys(localStorage)

            state.basketLS = keyIdLS.map((id) => {
                const product = JSON.parse(localStorage.getItem(id))
                return { id, ...product }
            })

            state.totalBasketCount = state.basketLS?.reduce((acc, item) => {
                return acc + item.count
            }, 0)
        },

        loadBasketFromLS: (state, action) => {
            const keyIdLS = Object.keys(localStorage)

            state.basketLS = keyIdLS.map((id) => {
                const product = JSON.parse(localStorage.getItem(id))
                return { id, ...product }
            })
        }

    }
}
)

export const { addProductBasketSlice, deleteProductBasketSlice, loadBasketFromLS } = basketSlice.actions
export default basketSlice.reducer