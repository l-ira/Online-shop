import React from "react";
import "./Basket.css";
import { Link } from "react-router-dom";

const Basket = ({ basketFromApp, updateBasket }) => {
	const handleRemove = (id) => {
		// Удаление товара из корзины
		const updatedBasket = basketFromApp.filter((item) => item.id !== id);
		updateBasket(updatedBasket); // Обновляем корзину в App.js
	};
	const basketUI = basketFromApp.map((item) => (
		<div className="Basket-container" key={item.id}>
			<div
				className="Product-img-basket"
				style={{ backgroundImage: `url(${item.image})` }}
				alt={item.title}
			/>
			<Link to={`/card/${item.id}`} className="Product-title">
				{item.title}
			</Link>
			<h4>${item.price}</h4>
			<div>
				<h4>Q-ty: {item.count}</h4>
			</div>
			<button
				onClick={() => handleRemove(item.id)}
				className="Btn-remove"
			>
				Remove
			</button>
		</div>
	));

	return <div className="Product-container">{basketUI}</div>;
};

export default Basket;
