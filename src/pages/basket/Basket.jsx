import React from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Basket = () => {
	const basket = useSelector((state) => state.basketStore.basket);

	const basketUI = basket?.map(({ id, title, price, image, count }) => (
		<div className="Basket-container" key={id}>
			<div
				className="Product-img-basket"
				style={{ backgroundImage: `url(${image})` }}
				alt={title}
			/>
			<Link to={`/card/${id}`} className="Product-title">
				{title}
			</Link>
			<h4>${price}</h4>
			<div>
				<h4>Q-ty: {count}</h4>
			</div>
			<button className="Btn-remove">Remove</button>
		</div>
	));

	return <div className="Product-container">{basketUI}</div>;
};

export default Basket;
