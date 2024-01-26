import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ searchData }) => {
	const [searchProduct, setSearchProduct] = useState("");

	const handleChange = (event) => {
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
			<div className="Header-top">
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
				Basket: 0
			</Link>
		</div>
	);
};

export default Header;
