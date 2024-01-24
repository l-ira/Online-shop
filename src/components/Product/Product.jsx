import { Link, useSearchParams } from "react-router-dom";
import "./Product.css";
import { useState } from "react";

const Product = (props) => {
	const {
		title,
		price,
		image,
		id,
		addProductsToBasket,
		deleteProductsBasket,
	} = props;

	const [productCount, setProductCount] = useState(0);

	const addBasket = () => {
		setProductCount(productCount + 1);
		const data = { id: id, title: title, price: price, count: 1 };
		addProductsToBasket(data);
	};

	const deleteBasket = () => {
		productCount > 0 && setProductCount(productCount - 1);
		// const data = {
		// 	id: id,
		// 	title: title,
		// 	price: price,
		// 	count: 0,
		// };
		deleteProductsBasket(id, price);
	};

	return (
		<div className="Product-item">
			<Link to={`/card/${id}`} className="Product-title">
				{title}
			</Link>
			<h5>${price}</h5>
			<img height="120px" src={image} alt={title} />
			<div className="Add-product">
				<button className="Btn-add Btn-basket" onClick={addBasket}>
					+
				</button>
				<button
					className="Btn-delete Btn-basket"
					onClick={deleteBasket}
				>
					-
				</button>
			</div>
			<div className="Count">Количество: {productCount}</div>
		</div>
	);
};

export default Product;
