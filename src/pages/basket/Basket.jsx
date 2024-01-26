import React from "react";
import "./Basket.css";
import { Link } from "react-router-dom";

const Basket = ({ basketFromApp }) => {
	const basketUI = basketFromApp.map((item) => (
		<div className="Product-item" key={item.id}>
			<Link to={`/card/${item.id}`} className="Product-title">
				{item.title}
			</Link>
			<h3>{item.title}</h3>
			<img width="150px" src={item.image} alt={item.title} />
			<h4>${item.price}</h4>
			<div>Quantity: {item.count}</div>
		</div>
	));

	return <div className="Product-container">{basketUI}</div>;
};

export default Basket;
