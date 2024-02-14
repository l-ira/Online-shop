import React from "react";
import "./Basket.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Basket = () => {
	const basket = useSelector((state) => state.basketStore.basket);
	const totalSum = useSelector((state) => state.basketStore.totalSum);

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
			<h4>${price.toFixed(2)}</h4>
			<div>
				<h4>Q-ty: {count}</h4>
			</div>
			<button className="Btn-remove">Remove</button>
		</div>
	));

	return (
		<>
			<div className="Product-container">
				{basket.length ? (
					<div>
						{basketUI} <h2>Итоговая сумма: ${totalSum}</h2>
					</div>
				) : (
					<h2>The cart is empty</h2>
				)}
			</div>
		</>

		//-------------------------Version 1---------------------------------
		// const basketUI =
		// 	basket.length > 0 ? (
		// 		basket?.map(({ id, title, price, image, count }) => (
		// 			<div className="Basket-container" key={id}>
		// 				<div
		// 					className="Product-img-basket"
		// 					style={{ backgroundImage: `url(${image})` }}
		// 					alt={title}
		// 				/>
		// 				<Link to={`/card/${id}`} className="Product-title">
		// 					{title}
		// 				</Link>
		// 				<h4>${price}</h4>
		// 				<div>
		// 					<h4>Q-ty: {count}</h4>
		// 				</div>
		// 				<button className="Btn-remove">Remove</button>
		// 			</div>
		// 		))
		// 	) : (
		// 		<h2>Empty</h2>
		// 	);

		// return (
		// 	<>
		// 		<div className="Product-container">{basketUI}</div>
		// 		{basket.length > 0 && <h3>Total sum: {totalSum}</h3>}

		// 	</>
	);
};

export default Basket;
