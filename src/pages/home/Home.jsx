import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../../components/Product/Product";
import { Categories } from "../../components/Categories/Categories";
import { useSelector } from "react-redux";

const API_URL_PRODUCTS = "https://fakestoreapi.com/products";

const Home = ({ searchProduct }) => {
	const [data, setData] = useState([]);
	const messageHome = useSelector((state) => state.counter.messageSlice);

	useEffect(() => {
		fetch(API_URL_PRODUCTS)
			.then((res) => res.json())
			.then((json) => {
				setData(json);
			});
	}, []);

	useEffect(() => {
		fetch(API_URL_PRODUCTS)
			.then((res) => res.json())
			.then((json) => setData(json));
	}, []);

	//чтобы не прописывать каждый раз product. можно деструктурировать:
	const productsData = data.map(({ title, price, id, image }) => (
		<Product title={title} price={price} key={id} image={image} id={id} />
	));

	const productsCategory = (category) => {
		fetch(
			category !== "all"
				? `${API_URL_PRODUCTS}/category/${category}`
				: `${API_URL_PRODUCTS}`
		)
			.then((res) => res.json())
			.then((json) => setData(json));
	};

	return (
		<>
			<h1>{messageHome}</h1>
			<Categories productsCategory={productsCategory} />
			<div className="Product-container">
				{data.length ? productsData : <h4>Loading...</h4>}
			</div>
		</>
	);
};

export default Home;
