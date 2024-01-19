import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Card.css";

const Card = () => {
	const { id } = useParams();
	console.log(id);

	const [product, setProduct] = useState("");

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/" + id)
			.then((res) => res.json())
			.then((json) => setProduct(json));
	}, []);

	return (
		<div className="Card-container">
			<h3>{product.title}</h3>
			<div>{product.description}</div>
			<h5>${product.price}</h5>
			<img width="200px" src={product.image} />
		</div>
	);
};

export default Card;
