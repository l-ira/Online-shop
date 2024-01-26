import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Card.css";

const Card = () => {
	const { id } = useParams();

	const [product, setProduct] = useState("");

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/" + id)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	}, []);

	return (
		<div className="Card-container">
			<img className="Product-img" width="200px" src={product.image} />
			<div className="Product-details">
				<h3>{product.title}</h3>
				<div>{product.description}</div>
				<h5>${product.price}</h5>
			</div>
		</div>
	);
};

export default Card;
