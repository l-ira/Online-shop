import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ searchData, getBasketTotal }) => {
	const [searchProduct, setSearchProduct] = useState("");

	const handleChange = (event) => {
		console.log("handleChange", event.target.value);
		setSearchProduct(event.target.value);

		searchData(event.target.value);
	};

	const navigate = useNavigate();
	return (
		<div className="Header-container">
			<button
				className="Main-btn"
				onClick={() => {
					navigate("/");
				}}
			>
				Main page
			</button>
			<div className="Header-page-center">
				<Link to="/" className="Title-shop">
					<h1>Online Shop</h1>
				</Link>
				<div>
					<input
						placeholder="Search"
						// value={searchProduct}
						className="Input-search"
						onChange={handleChange}
					/>
				</div>
			</div>
			<Link to="/basket" className="Basket">
				<h4>Basket: {getBasketTotal()}</h4>
			</Link>
		</div>
	);
};

export default Header;
