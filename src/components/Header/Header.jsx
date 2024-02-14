import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts, setSearchWord } from "../../redux/slices/productsSlice";

const Header = () => {
	const dispatch = useDispatch();

	const handleChange = (event) => {
		if (event.target.value === "") {
			dispatch(getProducts());
		} else {
			dispatch(setSearchWord(event.target.value));
		}
	};

	const navigate = useNavigate();
	return (
		<div className="Header-container">
			{/* <button
				className="Main-btn"
				onClick={() => {
					navigate("/");
				}}
			>
				Main page
			</button> */}
			{/* <div className="Header-page-center"> */}
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
			{/* </div> */}
			<Link to="/basket" className="Basket">
				Basket: 0
			</Link>
		</div>
	);
};

export default Header;
