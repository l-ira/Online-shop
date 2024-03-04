import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	getProductsFromCategories,
	setSearchWord,
} from "../../redux/slices/productsSlice.ts";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
	const dispatch = useDispatch();

	const basketCount = useSelector(
		(state) => state.basketStore.totalBasketCount
	);

	const handleChange = (event) => {
		if (event.target.value === "") {
			dispatch(getProductsFromCategories("all"));
		} else {
			dispatch(setSearchWord(event.target.value));
		}
	};

	// const navigate = useNavigate(); //for Main-btn

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
				<IoCartOutline size={40} /> <h3>{basketCount}</h3>
			</Link>
		</div>
	);
};

export default Header;
