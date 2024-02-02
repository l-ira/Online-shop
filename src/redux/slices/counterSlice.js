import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    messageSlice: 'Hi',

}

export const counterSlice = createSlice({
    name: 'counter',
    initialState, // initialState:initialState,
    reducers: {
        increment: (state) => { //функция increment
            state.value += 1
        },
        decrement: (state) => { // state обращается к текущему состоянию value:0
            state.value -= 1
        },
        showMessage: (state, action) => {
            state.messageSlice = action.payload;
        }
    },
})

export const { increment, decrement, showMessage } = counterSlice.actions

export default counterSlice.reducer

