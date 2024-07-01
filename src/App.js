import React, { useState } from 'react';
import './App.css';
import Header from './components/UserComponents/Header';
import Products from './components/UserComponents/Bestseller';
import Footer1 from './components/UserComponents/Footer1';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ProductForm from './components/AdminComponents/ProductForm';
import Cart from './components/UserComponents/Cart';
import Contact from './components/UserComponents/Contact';
import ManageProducts from './components/AdminComponents/ManageProducts';
import UserLogin from './components/login/UserLogin';
import AdminLogin from './components/login/AdminLogin';
import { UserHome } from './pages/UserHome';
import OurProducts from './components/UserComponents/Our_products';
import AdminForm from './components/AdminComponents/AdminForm';
import Admin from './components/AdminComponents/Admin';

function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/AdminHome');

  return (
    <div className="App">
      {!isAdminRoute && <Header isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin} />}
      <Routes>
        <Route path="/Home" element={<UserHome />} />
        <Route path="/AdminHome" element={<Admin />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Our_products" element={<OurProducts />} />
        <Route path="/Login_signUp" element={<UserLogin isUserLogin={isUserLogin} setIsUserLogin={setIsUserLogin} />} />
        <Route path="/Login_signUp/admin_login" element={<AdminLogin isAdminLogin={isAdminLogin} setIsAdminLogin={setIsAdminLogin} />} />
        <Route path="/AdminHome/ProductForm" element={<ProductForm />} />
        <Route path="/Bestseller" element={<Products />} />
        <Route path="/AdminHome/ManageProducts" element={<ManageProducts />} />

        <Route path="/AdminHome/AdminForm" element={<AdminForm />} />

      </Routes>
      {!isAdminRoute && <Footer1 />}
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
