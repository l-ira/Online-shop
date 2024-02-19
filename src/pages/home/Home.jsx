import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../../components/Product/Product";
import { Categories } from "../../components/Categories/Categories";
import { useSelector, useDispatch } from "react-redux";
import { getProductsFromCategories } from "../../redux/slices/productsSlice";

const API_URL_PRODUCTS = "https://fakestoreapi.com/products";

const Home = () => {
	const dispatch = useDispatch();

	const [data, setData] = useState([]);

	const category = useSelector((state) => state.categories.selectedCategory);
	const products = useSelector((state) => state.items.items);

	useEffect(() => {
		dispatch(getProductsFromCategories(category));
	}, [category]);

	const productsData = products.map(({ title, price, id, image }) => (
		<Product title={title} price={price} key={id} image={image} id={id} />
	));

	return (
		<>
			<Categories />
			<div className="Product-container">
				{products.length ? productsData : <h4>Loading...</h4>}
			</div>
		</>
	);
};

export default Home;
