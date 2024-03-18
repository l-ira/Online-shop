import React from "react";
import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Home from "./pages/home/Home";
import Basket from "./pages/basket/Basket";
import Card from "./pages/card/Card.tsx";

function App() {
	const [searchProduct, setSearchProduct] = useState("");

	return (
		<>
			<Header />
			<div className="Home-container">
				<Routes>
					<Route
						path="/"
						element={<Home searchProduct={searchProduct} />}
					/>
					<Route path="/basket" element={<Basket />} />
					<Route path="/card/:id" element={<Card />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
