import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Card.css";

type TProduct = {
	id: number;
	title: string;
	price: number;
	category: string;
	image: string;
	description: string;
};

const Card = () => {
	// const func = <T extends unknown>(x: T): T => {
	// 	return x;
	// };
	// func<number>(1);

	const { id } = useParams();
	const [productCount, setProductCount] = useState(0);
	// const [product, setProduct] = useState<TProduct | {}>({}); //здесь мы как будто обращаемся к пустому объекту и ищем title, image и т.д., поэтому программа не понимает как обратиться к пустому объекту, решается с помощью null:
	const [product, setProduct] = useState<TProduct | null>(null);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products/" + id)
			.then((res) => res.json())
			.then((json) => setProduct(json))
			.catch((err) => console.log(err));
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
			<h3>{product?.title}</h3>
			<img key={id} className="Card-image" src={product?.image} />
			<div>{product?.description}</div>
			<h5>${product?.price}</h5>
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
