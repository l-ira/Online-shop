import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
	"category/fetchCategories",
	async () => {
		try {
			const { data } = await axios.get(
				"https://fakestoreapi.com/products/categories"
			);
			return data;
		} catch (error) {
			console.log(error);
		}
	}
);

type TInitialState = {
	items?: Array<string>;
	selectedCategory: string;
};

const initialState: TInitialState = {
	items: [],
	selectedCategory: "all",
};

const categoriesSlice = createSlice({
	name: "categories",
	initialState,
	reducers: {
		setSelectedCategory: (state, action) => {
			state.selectedCategory = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.items = action.payload;
		});
	},
});

export const { setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
