import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../../components/Product/Product";
import { Categories } from "../../components/Categories/Categories";
import Basket from "../basket/Basket";

const API_URL_PRODUCTS = "https://fakestoreapi.com/products";

const Home = ({ searchProduct }) => {
	const [data, setData] = useState([]);
	const [originalData, setOriginalData] = useState([]);

	const [basket, setBasket] = useState([]);

	useEffect(() => {
		fetch(API_URL_PRODUCTS)
			.then((res) => res.json())
			.then((json) => {
				setData(json);
				setOriginalData(json);
			});
	}, []);

	useEffect(() => {
		if (searchProduct.trim() === "") {
			setData(originalData);
		} else {
			const resultSearchProduct = originalData.filter((item) =>
				item.title.toLowerCase().includes(searchProduct.toLowerCase())
			);
			setData(resultSearchProduct);
		}
	}, [searchProduct, originalData]);

	const addProductsToBasket = (product) => {
		let findProductByID = basket.find((item) => item.id === product.id);

		if (findProductByID) {
			findProductByID.count++;
			findProductByID.price += product.price;
		} else {
			setBasket([...basket, product]);
		}
	};

	const deleteProductsBasket = (id, price) => {
		let findProductByID = basket.find((item) => item.id === id);

		if (findProductByID) {
			findProductByID.count--;
			findProductByID.price -= price;
		}
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
			deleteProductsBasket={deleteProductsBasket}
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
			{console.log("basket", basket)}
			<div className="Home-container">
				<Categories productsCategory={productsCategory} />
				<div className="Product-container">
					{data.length ? productsData : <h4>Loading...</h4>}
				</div>
			</div>
			<Basket basket={basket} />
		</>
	);
};

export default Home;
