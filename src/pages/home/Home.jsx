import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../../components/Product/Product";
import { Categories } from "../../components/Categories/Categories";
import { useSelector, useDispatch } from "react-redux";
import {
	getProductFromCategories,
	getProducts,
} from "../../redux/slices/productsSlice";

const API_URL_PRODUCTS = "https://fakestoreapi.com/products";

const Home = () => {
	const dispatch = useDispatch();

	const [data, setData] = useState([]);

	const messageHome = useSelector((state) => state.counter.messageSlice);
	const category = useSelector((state) => state.categories.selectedCategory);
	const products = useSelector((state) => state.items.items);

	console.log(products);

	// useEffect(() => {
	// 	fetch(API_URL_PRODUCTS)
	// 		.then((res) => res.json())
	// 		.then((json) => setData(json))
	// 		.catch((err) => console.log(err));
	// }, []);

	useEffect(() => {
		dispatch(getProducts());
	}, []);

	useEffect(() => {
		category === "all"
			? dispatch(getProducts())
			: dispatch(getProductFromCategories(category));
	}, [category]);

	const productsData = products.map(({ title, price, id, image }) => (
		<Product title={title} price={price} key={id} image={image} id={id} />
	));

	//search input from older versions

	// const [originalData, setOriginalData] = useState([]);

	// useEffect(() => {
	// 	fetch(API_URL_PRODUCTS)
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			setData(json);
	// 			setOriginalData(json); // Set the original data when the component mounts
	// 		});
	// }, []);

	// useEffect(() => {
	// 	if (searchProduct.trim() === "") {
	// 		setData(originalData); // Reset data to the original list of products
	// 	} else {
	// 		const resultSearchProduct = originalData.filter((item) =>
	// 			item.title.toLowerCase().includes(searchProduct.toLowerCase())
	// 		);
	// 		setData(resultSearchProduct);
	// 	}
	// }, [searchProduct, originalData]);

	return (
		<>
			<h1>{messageHome}</h1>
			<Categories
			// productsCategory={productsCategory} //old verion w/o redux toolkit
			/>
			<div className="Product-container">
				{products.length ? productsData : <h4>Loading...</h4>}
			</div>
		</>
	);
};

export default Home;
