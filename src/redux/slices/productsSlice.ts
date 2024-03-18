import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_API = "https://fakestoreapi.com/products";

export const getProductsFromCategories = createAsyncThunk(
	"category/fetchProductFromCategories",
	async (category: string) => {
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

enum Status {
	LOADING = "loading",
	SUCCESS = "success",
	ERROR = "error",
}

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
	status: Status;
};

const initialState: TInitialState = {
	items: [],
	status: Status.LOADING,
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
		builder.addCase(getProductsFromCategories.pending, (state, action) => {
			state.status = Status.LOADING;
		});
		builder.addCase(
			getProductsFromCategories.fulfilled,
			(state, action) => {
				state.items = action.payload;
				state.status = Status.SUCCESS;
			}
		);
		builder.addCase(getProductsFromCategories.rejected, (state, action) => {
			state.status = Status.ERROR;
		});
	},
});

export const { setSearchWord } = productSlice.actions;
export default productSlice.reducer;
