import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../../components/Product/Product";
import { Categories } from "../../components/Categories/Categories";
import { useSelector } from "react-redux";

const API_URL_PRODUCTS = "https://fakestoreapi.com/products";

const Home = ({ searchProduct, getBasket }) => {
	const [data, setData] = useState([]);
	const [originalData, setOriginalData] = useState([]);
	const [basket, setBasket] = useState([]);
	const messageHome = useSelector((state) => state.counter.messageSlice);

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

	useEffect(() => {
		getBasket(basket);
	}, [basket]);

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
