import { useEffect, useState } from "react";
import "./Categories.css";
import {
	getCategories,
	setSelectedCategory,
} from "../../redux/slices/categoriesSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";

export const Categories: React.FC = () => {
	const [selectCategory, setSelectCategory] = useState<string>(""); //old verion w/o redux toolkit

	const categories = useSelector(
		(state): RootState => state.categories.items
	); //from slice

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, []);

	const handleCategory = (category: string) => {
		setSelectCategory(category);
		dispatch(setSelectedCategory(category));
	};

	const categoriesList = categories?.map((category: string, idx: number) => (
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
