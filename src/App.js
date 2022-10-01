import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from './component/navbar/Topbar';
import Footer from './component/footer/Footer';
import Product from './component/shop/Product';
import Cart from './component/cart/Cart';
import Checkout from './component/checkout/Checkout';
import Single from './component/single/Single';
import Signin from './component/auth/Signin';
import Signup from './component/auth/Signup';
import ProductCategory from './component/shop/Cat';
import ProductType from './component/shop/Type';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getTotal} from './redux/cart'
import Pay from './component/pay/pay';
import Home from './component/home/Home';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotal())
  })
  return (
    <Router>
      <Topbar />
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/shop' element={<Product/>} />
      <Route exact path='/cart' element={<Cart/>} />
      <Route exact path='/checkout' element={<Checkout/>} />
      <Route exact path='/single' element={<Single/>} />
      <Route exact path='/login' element={<Signin/>} />
        <Route exact path='/signup' element={<Signup />} />
        {/* prduoct  */}
        <Route exact path='/product' element={<Product/>} />
        <Route exact path='/product/:category' element={<ProductCategory/>} />
        <Route exact path='/product/type/:type' element={<ProductType />} />
        
        {/* invoice  */}
        <Route exact path='/payment' element={<Pay/>} />
      </Routes>
      <Footer />
   </Router>
  );
}

export default App;
