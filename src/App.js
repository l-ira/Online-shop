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
    setSearchProduct(searchWord)
  }

  const getBasket = (basketGetBasket) => {
    setBasket(basketGetBasket)
  }

  const getBasketTotal = () => {
    return basket.reduce((total, item) => total + item.count, 0)
  }

  const addToBasket = (product) => {
    // Проверяем, есть ли уже такой товар в корзине
    const existingProductIndex = basket.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Если товар уже есть в корзине, увеличиваем его количество
      const updatedBasket = [...basket];
      updatedBasket[existingProductIndex].count++;
      setBasket(updatedBasket);
    } else {
      // Если товара еще нет в корзине, добавляем его
      setBasket(prevBasket => [...prevBasket, { ...product, count: 1 }]);
    }
  };

  const updateBasket = (updatedBasket) => {
    // Функция для обновления корзины в App.js
    setBasket(updatedBasket);
  };

  return (
    <>
      <Header searchData={searchData} getBasketTotal={getBasketTotal} />
      <div className="Home-container">
        <Routes>
          <Route path="/" element={<Home
            getBasket={getBasket}
            searchProduct={searchProduct} />} />
          <Route path="/basket" element={<Basket basketFromApp={basket} updateBasket={updateBasket} />} />
          <Route path="/card/:id" element={<Card basket={basket} updateBasket={updateBasket} />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
