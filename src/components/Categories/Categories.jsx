import { useEffect, useState } from "react";
import "./Categories.css";
import {
	getCategories,
	setSelectedCategory,
} from "../../redux/slices/categoriesSlice.ts";
import { useDispatch, useSelector } from "react-redux";

export const Categories = () => {
	const [selectCategory, setSelectCategory] = useState(""); //old verion w/o redux toolkit

	const categories = useSelector((state) => state.categories.items); //from slice

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, []);

	const handleCategory = (category) => {
		setSelectCategory(category);
		dispatch(setSelectedCategory(category));
	};

	const categoriesList = categories?.map((category, idx) => (
		<option key={idx} value={category}>
			{category}
		</option>
	));

	return (
		<>
			<select
				className="Category"
				value={selectCategory}
				onChange={(event) => handleCategory(event.target.value)}
			>
				<option>all</option>
				{categoriesList}
			</select>
		</>
	);
};
