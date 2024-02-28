import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Service_card from './components/Service_cards';
import Our_products from './components/Our_products';
import Component5 from './components/Component5';
import Component6 from './components/Component6';
import Store from './components/Store';
import Products from './components/Products';
import Review from './components/Review';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Service_card/>
      <Our_products/>
      <Component5/>
      <Component6/>
      <Store/>
      <Products/>
      <Review/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
