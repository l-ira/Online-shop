import { Link, useSearchParams } from "react-router-dom";
import "./Product.css";
import { useState } from "react";

const Product = (props) => {
	const { title, price, image, id, addProductsToBasket } = props;

	const [productCount, setProductCount] = useState(0);

	const addBasket = () => {
		setProductCount(productCount + 1);
		const data = { id: id, title: title, price: price, count: 0 };
		addProductsToBasket(data);
	};

	return (
		<div className="Product-item">
			<Link to={`/card/${id}`} className="Product-title">
				{title}
			</Link>
			<h5>${price}</h5>
			<img height="120px" src={image} alt={title} />
			<div className="Add-product">
				<button className="Btn-add" onClick={addBasket}>
					+
				</button>
				<button
					className="Btn-add"
					onClick={() =>
						productCount > 0 && setProductCount(productCount - 1)
					}
				>
					-
				</button>
			</div>
			<div className="Count">Количество: {productCount}</div>
		</div>
	);
};

export default Product;
