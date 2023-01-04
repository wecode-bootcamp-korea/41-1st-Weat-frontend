import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Main from './pages/main/Main';
import Category from './pages/Category/Category';
import Detail from './pages/Category/detail/Detail';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Category/Detail" element={<Detail />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
