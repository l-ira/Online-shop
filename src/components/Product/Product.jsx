import { Link, useSearchParams } from "react-router-dom";
import "./Product.css";
import { useState } from "react";
import { addProductBasketSlice } from "../../redux/slices/basketSlice";
import { useDispatch } from "react-redux";

const Product = (props) => {
	const {
		title,
		price,
		image,
		id,
		////-------------------Old version w/o Redux toolkit------------------------------
		// addProductsToBasket,
		// deleteProductsBasket,
	} = props;

	const dispatch = useDispatch();

	const [productCount, setProductCount] = useState(0);

	const addBasket = () => {
		setProductCount(productCount + 1);
		const data = {
			id: id,
			title: title,
			price: price,
			count: 1,
			image: image,
		};

		dispatch(addProductBasketSlice(data));
		////-------------------Old version w/o Redux toolkit------------------------------
		// addProductsToBasket(data);
	};

	////-------------------Old version w/o Redux toolkit------------------------------
	// const deleteBasket = () => {
	// 	productCount > 0 && setProductCount(productCount - 1);
	// 	deleteProductsBasket(id, price);
	// };

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
				<h4 className="Count">{productCount}</h4>
				<button
					className="Btn-delete Btn-basket"
					onClick={() => {
						productCount > 0 && setProductCount(productCount - 1); //deleted {deleteBasket}
					}}
				>
					-
				</button>
			</div>
		</div>
	);
};

export default Product;
