import { createSlice } from "@reduxjs/toolkit";

type TItems = {
	id: number;
	title: string;
	image: string;
	price: number;
	count: number;
};

type TInitialState = {
	basketLS: Array<TItems>[];
	totalBasketCount: number;
	totalBasketPrice: number;
};

const initialState: TInitialState = {
	basketLS: [],
	totalBasketCount: 0,
	totalBasketPrice: 0,
};

export const basketSlice = createSlice({
	name: "basketSlice",
	initialState: initialState,
	reducers: {
		addProductBasketSlice: (state, action) => {
			const { id, title, price, count, image } = action.payload;
			let countPrice = count * price;
			localStorage.setItem(
				id,
				JSON.stringify({
					title,
					price: countPrice,
					count,
					image,
				})
			);

			const keyIdLS = Object.keys(localStorage);

			state.basketLS = keyIdLS.map((id) => {
				const product = JSON.parse(localStorage.getItem(id));
				return { id, ...product };
			});

			state.totalBasketCount = state.basketLS?.reduce((acc, item) => {
				return acc + item.count;
			}, 0);

			state.totalBasketPrice = state.basketLS?.reduce((acc, item) => {
				return acc + item.price;
			}, 0);
		},

		deleteProductBasketSlice: (state, action) => {
			const id = action.payload;

			if (localStorage.getItem(id)) {
				const item = JSON.parse(localStorage.getItem(id));
				if (item.count > 1) {
					item.count -= 1;
					item.price = item.price * item.count;
				} else {
					localStorage.removeItem(id);
					state.totalBasketCount = 0;
				}
			}
		},

		loadBasketFromLS: (state, action) => {
			const keyIdLS = Object.keys(localStorage);

			state.basketLS = keyIdLS.map((id) => {
				const product = JSON.parse(localStorage.getItem(id));
				return { id, ...product };
			});
		},
	},
});

export const {
	addProductBasketSlice,
	deleteProductBasketSlice,
	loadBasketFromLS,
} = basketSlice.actions;
export default basketSlice.reducer;
