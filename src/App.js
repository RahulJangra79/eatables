import './App.css';
import Header from './components/Header';
import Our_products from './components/Our_products';
import Products from './components/Bestseller';
import Footer1 from './components/Footer1';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import ProductForm from './components/ProductForm';
import Cart from './components/Cart';
import Contact from './components/Contact';
import ManageProducts from './components/ManageProducts';

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
                  path="/productform"
                  element={<ProductForm />}
               ></Route>
          <Route
            path="/Bestseller"
            element={<Products />}
          ></Route>
          <Route
            path="/manageproducts"
            element={<ManageProducts />}
          ></Route>
        </Routes>
        <Footer1 />
      </BrowserRouter>
    </div>
  );
}
export default App;