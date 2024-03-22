import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Service_card from './components/Service_cards';
import Our_products from './components/Our_products';
import Component5 from './components/Component5';
import Component6 from './components/Component6';
import Store from './components/Store';
import Products from './components/Bestseller';
import Review from './components/Review';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path="/Header"
            element={<Header />}
          ></Route>
          <Route
            path="/Our_products"
            element={<Our_products />}
          ></Route>
          <Route
            path="/Review"
            element={<Review />}
          ></Route>
          <Route
            path="/Bestseller"
            element={<Products />}
          ></Route>
          <Route
            path="/Footer"
            element={<Footer />}
          ></Route>
        </Routes>
        <Header />
        <Hero />
        <Service_card />
        <Our_products />
        <Component5 />
        <Component6 />
        <Store />
        <Products />
        <Review />
        <Testimonial />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;