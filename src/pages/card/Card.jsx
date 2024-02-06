import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Card.css";

const Card = () => {
	const { id } = useParams();

	const [product, setProduct] = useState("");
	const [productCount, setProductCount] = useState(0);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/" + id)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	}, [id]);

	const handleIncrement = () => {
		setProductCount(productCount + 1);
	};

	const handleDecrement = () => {
		if (productCount > 0) {
		}
		setProductCount(productCount - 1);
	};

	return (
		<div className="Card-container">
			<h3>{product.title}</h3>
			<img key={id} className="Card-image" src={product.image} />
			<div>{product.description}</div>
			<h5>${product.price}</h5>
			<div className="Add-product">
				<button
					className="Btn-add Btn-basket"
					onClick={handleIncrement}
				>
					+
				</button>
				<h4 className="Count">{productCount}</h4>
				<button
					className="Btn-delete Btn-basket"
					onClick={handleDecrement}
				>
					-
				</button>
			</div>
		</div>
	);
};

export default Card;
