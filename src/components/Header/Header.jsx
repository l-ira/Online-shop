import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ searchData }) => {
	const [searchProduct, setSearchProduct] = useState("");

	const handleChange = (event) => {
		console.log("handleChange", event.target.value);
		setSearchProduct(event.target.value);

		searchData(event.target.value);
	};

	const navigate = useNavigate();
	console.log("search", searchProduct);
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
			<Link to="/" className="Title-shop">
				<h2>Online Shop</h2>
			</Link>
			<div>
				<input
					placeholder="Search"
					// value={searchProduct}
					className="Input-search"
					onChange={handleChange}
				/>
			</div>
			<Link to="/basket" className="Basket">
				Basket: 0
			</Link>
		</div>
	);
};

export default Header;
