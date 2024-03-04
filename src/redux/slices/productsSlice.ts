import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_API = "https://fakestoreapi.com/products";

export const getProductsFromCategories = createAsyncThunk(
	"category/fetchProductFromCategories",
	async (category) => {
		try {
			const { data } = await axios.get(
				category === "all"
					? BASE_API
					: `${BASE_API}/category/${category}`
			);
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

type TItems = {
	id: number;
	title: string;
	price: string;
	category: string;
	description: string;
	image: string;
};

type TInitialState = {
	items: Array<TItems>;
};

const initialState: TInitialState = {
	items: [],
};

const productSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
		setSearchWord: (state, action) => {
			state.items = state.items.filter((item) =>
				item.title.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(
			getProductsFromCategories.fulfilled,
			(state, action) => {
				state.items = action.payload;
			}
		);
	},
});

export const { setSearchWord } = productSlice.actions;
export default productSlice.reducer;
