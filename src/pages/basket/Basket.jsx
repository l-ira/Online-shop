import React, { useState } from "react";
import "./Basket.css";

const Basket = ({ basket }) => {
	return (
		<>
			<div className="Basket-page">
				<h2 className="Basket-title">Basket Page</h2>
				{basket.map((product) => (
					<div className="Basket-container" key={product.id}>
						<img
							className="Product-img-basket"
							src={product.image}
							alt={product.title}
						/>
						<h3>{product.title}</h3>
						<div className="Quantity-basket">
							`x1${product.count}`
						</div>
						<div className="Price-basket">`${product.price}`</div>
					</div>;
				))}

				<h3 className="Total-basket">
					Total:{" "}
					{basket.reduce(
						(total, product) => total + product.price,
						0
					)}
				</h3>
			</div>
		</>
	);
};

export default Basket;
