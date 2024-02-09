import { useEffect, useState } from "react";
import "./Categories.css";
import {
	getCategories,
	setSelectedCategory,
} from "../../redux/slices/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";

export const Categories = () => {
	// const [categories, setCategories] = useState(); //old verion w/o redux toolkit

	const [selectCategory, setSelectCategory] = useState(""); //old verion w/o redux toolkit

	const categories = useSelector((state) => state.categories.items); //from slice

	const dispatch = useDispatch();

	useEffect(() => {
		//Old version w/o redux toolkit
		// fetch("https://fakestoreapi.com/products/categories")
		// 	.then((res) => res.json())
		// 	.then((json) => setCategories(json));

		dispatch(getCategories());
	}, []);

	const handleCategory = (category) => {
		setSelectCategory(category);
		dispatch(setSelectedCategory(category));
		// productsCategory(category); //old verssion w/o redux toolkit
	};

	const categoriesList = categories?.map((category, idx) => (
		<option key={idx} value={category}>
			{category}
		</option>

		// <li
		// 	className="Category"
		// 	key={idx}
		// 	onClick={() => handleCategory(category)}
		// >
		// 	{category}
		// </li>
	));

	return (
		<>
			{/* {console.log(productsCategory)} */}

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
