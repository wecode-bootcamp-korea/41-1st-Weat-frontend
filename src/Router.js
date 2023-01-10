import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Category from './pages/category/Category';
import Detail from './pages/category/detail/Detail';
import Cart from './pages/cart/Cart';
import Payment from './pages/payment/Payment';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Category/Detail/:id" element={<Detail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
