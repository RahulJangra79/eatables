import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Our_products from './components/Our_products';
import Products from './components/Bestseller';
import Footer from './components/Footer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Cart from './components/Cart';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path="/Cart"
            element={<Cart/>}
          ></Route>
          <Route
            path="/Contact"
            element={<Contact/>}
          ></Route>
          <Route
            path="/Our_products"
            element={<Our_products />}
          ></Route>
          <Route
            path="/Bestseller"
            element={<Products />}
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;