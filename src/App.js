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

  const [basket, setBasket] = useState([])

  const searchData = (searchWord) => {
    // console.log('searchWord', searchWord)
    setSearchProduct(searchWord)
  }

  const getBasket = (basketGetBasket) => {
    setBasket(basketGetBasket)
  }

  return (
    <>
      <Header searchData={searchData} />
      <div className="Home-container">
        <Routes>
          <Route path="/" element={<Home
            getBasket={getBasket}
            searchProduct={searchProduct} />} />
          <Route path="/basket" element={<Basket basketFromApp={basket} />} />
          <Route path="/card/:id" element={<Card />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
