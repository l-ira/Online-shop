import './App.css';
import Header from './components/Header/Header';
import Home from './pages/home/Home';
import Basket from './pages/basket/Basket';
import Card from './pages/card/Card';
import {
  Route,
  Routes,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [searchProduct, setSearchProduct] = useState('')

  //----------------Old version with redux toolkit----------------
  // const searchData = (searchWord) => {
  //   setSearchProduct(searchWord)
  // }


  return (
    <>
      <Header
      //----------------Old version with redux toolkit----------------
      // searchData={searchData}   
      />
      <div className="Home-container">
        <Routes>
          <Route path="/" element={<Home
            searchProduct={searchProduct} />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/card/:id" element={<Card />} />
        </Routes>
      </div>
    </>
  )
};

export default App;
