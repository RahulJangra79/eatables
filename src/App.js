import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Our_products from './components/Our_products';
import Products from './components/Bestseller';
import Footer1 from './components/Footer1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import ProductForm from './components/ProductForm';
import Cart from './components/Cart';
import Contact from './components/Contact';
import ManageProducts from './components/ManageProducts';
import UserLogin from './components/UserLogin';
import AdminLogin from './components/AdminLogin';

function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Our_products" element={<Our_products />} />
          <Route path="/Login_signUp" element={<UserLogin isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin} />} />
          <Route path="/Login_signUp/admin_login" element={<AdminLogin isAdminLogin={isAdminLogin} setIsAdminLogin={setIsAdminLogin} />} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path="/Bestseller" element={<Products />} />
          <Route path="/manageproducts" element={<ManageProducts />} />
        </Routes>
        <Footer1 />
      </BrowserRouter>
    </div>
  );
}

export default App;
