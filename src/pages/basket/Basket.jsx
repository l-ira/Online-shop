import React, { useEffect } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadBasketFromLS } from "../../redux/slices/basketSlice.ts";

const Basket = () => {
	const keyIdLS = Object.keys(localStorage);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(loadBasketFromLS());
	}, []);

	const productBasketLS = keyIdLS.map((id) => {
		//"key" in application LS
		const product = JSON.parse(localStorage.getItem(id));
		return { id, ...product };
	});

	const productBasketUI = productBasketLS.map(
		({ id, title, price, count, image }) => (
			<div className="Basket-container" key={id}>
				<div
					className="Product-img-basket"
					style={{ backgroundImage: `url(${image})` }}
					alt={title}
				/>
				<Link to={`/card/${id}`} className="Product-title">
					{title}
				</Link>
				<h4>${price.toFixed(2)}</h4>
				<div>
					<h4>Q-ty: {count}</h4>
				</div>
				<button className="Btn-remove">Remove</button>
			</div>
		)
	);

	const totalSum = productBasketLS.reduce((acc, product) => {
		return acc + product.price;
	}, 0);

	const totalBasketCount = productBasketLS.reduce((acc, product) => {
		return acc + product.count;
	}, 0);

	return (
		<>
			<div className="Product-container">
				<div>{productBasketUI}</div>
				<h2>Итоговая сумма: ${totalSum}</h2>
			</div>
		</>
	);
};

export default Basket;
