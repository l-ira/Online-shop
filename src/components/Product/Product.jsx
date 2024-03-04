import { Link, useSearchParams } from "react-router-dom";
import "./Product.css";
import { useEffect, useState } from "react";
import {
	addProductBasketSlice,
	deleteProductBasketSlice,
} from "../../redux/slices/basketSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = (props) => {
	const basketLS = useSelector((state) => state.basketStore.basketLS);

	const { title, price, image, id } = props;

	const dispatch = useDispatch();

	const [productCount, setProductCount] = useState(0);

	useEffect(() => {
		const findProductFromBasket = basketLS.find((item) => item.id == id);

		if (findProductFromBasket) {
			setProductCount(findProductFromBasket.count);
		}
	}, []);

	const addBasket = () => {
		setProductCount(productCount + 1);
	};

	useEffect(() => {
		const data = {
			id: id,
			title: title,
			price: price,
			count: productCount,
			image: image,
		};

		productCount > 0 && dispatch(addProductBasketSlice(data));
	}, [productCount]);

	const deleteBasket = () => {
		productCount > 0 && setProductCount(productCount - 1);
		const data = {
			id: id,
			title: title,
			price: price,
			count: 0,
			image: image,
		};

		dispatch(deleteProductBasketSlice(data));
	};

	return (
		<div className="Product-item">
			<Link to={`/card/${id}`} className="Product-title">
				{title}
			</Link>
			<img height="120px" src={image} alt={title} />
			<h4 className="Product-price">${price}</h4>
			<div className="Add-product">
				<button className="Btn-add Btn-basket" onClick={addBasket}>
					+
				</button>
				<h4 className="Count">{productCount}</h4>
				<button
					className="Btn-delete Btn-basket"
					onClick={deleteBasket}
				>
					-
				</button>
			</div>
		</div>
	);
};

export default Product;
