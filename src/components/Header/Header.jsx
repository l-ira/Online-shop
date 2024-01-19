import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
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
			<Link to="/" className="Title-shop">
				<h2>Online Shop</h2>
			</Link>
			<Link to="/basket" className="Basket">
				Basket: 0
			</Link>
		</div>
	);
};

export default Header;
