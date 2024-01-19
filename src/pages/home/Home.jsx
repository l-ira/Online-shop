import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../../components/Product/Product";
import { Categories } from "../../components/Categories/Categories";

const API_URL_PRODUCTS = "https://fakestoreapi.com/products";

const Home = () => {
	const [data, setData] = useState([]);

	const [basket, setBasket] = useState([]);

	const addProductsToBasket = (product) => {
		console.log("product added to basket", product);
		setBasket([...basket, product]);
	};

	useEffect(() => {
		fetch(API_URL_PRODUCTS)
			.then((res) => res.json())
			.then((json) => setData(json));
	}, []);

	// Variant 1
	// const productsData = data.map((product) => (
	// 	<Product title={product.title} price={product.price} key={product.id} />
	// ));

	// Variant 2
	//чтобы не прописывать каждый раз product. можно деструктурировать:
	const productsData = data.map(({ title, price, id, image }) => (
		<Product
			title={title}
			price={price}
			key={id}
			image={image}
			id={id}
			addProductsToBasket={addProductsToBasket}
		/>
	));

	// Variant 1
	// const productsCategory = (category) => {
	// 	if (category === "all") {
	// 		fetch("https://fakestoreapi.com/products")
	// 			.then((res) => res.json())
	// 			.then((json) => setData(json));
	// 	} else {
	// 		fetch(`${API_URL_PRODUCTS}/category/${category}`)
	// 			.then((res) => res.json())
	// 			.then((json) => setData(json));
	// 	}
	// };

	// Variant 2
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
			{console.log("basket", basket)};
			<div className="Home-container">
				<Categories productsCategory={productsCategory} />
				<div className="Product-container">
					{data.length ? productsData : <h4>Loading...</h4>}
				</div>
			</div>
		</>
	);
};

export default Home;
