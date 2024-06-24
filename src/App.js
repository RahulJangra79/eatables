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
// import Login from './components/Login';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLoginSuccess = () => {
  //   setIsLoggedIn(true);
  // };

  return (
    <div className="App">
      {/* {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : ( */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Our_products" element={<Our_products />} />
            <Route path="/productform" element={<ProductForm />} />
            <Route path="/Bestseller" element={<Products />} />
            <Route path="/manageproducts" element={<ManageProducts />} />
          </Routes>
          <Footer1 />
        </BrowserRouter>
      )
    </div>
  );
}

export default App;
