import logo from './logo.svg';
import './App.css';
import Review from './components/Review';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Review/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
