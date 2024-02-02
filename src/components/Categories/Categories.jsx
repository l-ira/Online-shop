import { useEffect, useState } from "react";
import "./Categories.css";

export const Categories = ({ productsCategory }) => {
	const [categories, setCategories] = useState();

	const [selectedCategory, setSelectedCategory] = useState("");

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((json) => setCategories(json));
	}, []);

	const handleCategory = (category) => {
		setSelectedCategory(category);
		productsCategory(category);
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
				value={selectedCategory}
				onChange={(event) => handleCategory(event.target.value)}
			>
				<option>all</option>
				{categoriesList}
			</select>
		</>
	);
};
