// src/App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Products from "./pages/Products";
import Login from "./pages/login";
import Cart from "./pages/Cart";
import { Toaster } from 'react-hot-toast';
import AdminProducts from "./pages/admin/AdminProducts";
import AdminCategory from "./pages/admin/AdminCategory";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Checkout from "./pages/Checkout";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/home";
import Header from "./components/header";
import ProductDetail from "./pages/productDetail";
import Register from "./pages/Register";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/productDetail/:id" element={<ProductDetail/>} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<PrivateRoute element={AdminProducts} />} />
          <Route path="/admin/category" element={<PrivateRoute element={AdminCategory} />} />
        </Routes>
        <Toaster />
      </div>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
