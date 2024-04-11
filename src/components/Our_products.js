import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Our_products.css";

const Our_products = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const response = await axios.get('http://localhost:5000/products');
            setProducts(response.data.products);
         } catch (error) {
            console.error('Error fetching products:', error);
         }
      };

      fetchProducts();
   }, []);

   return (
      <div className="component-4">
         <div className="products">
            <div>
               <h1 className="h1-our-product">Our Products</h1>
            </div>
            <div className="product-gallery">
               <div className="product-gallery-row">
                  {products.map((product, index) => (
                     <div className="product-item" key={index}>
                        {/*<div className="product-image" id={product.imageid}></div>*/}
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <div className="product-down-part">
                           <h3>{product.name}</h3>
                           <p>{product.description}</p>
                           <div className="order-details">
                              <h3 className="product-price">$ {product.price}</h3>
                              <button className="order-now-button"><span><i className="fa-solid fa-cart-shopping"></i></span>Order Now</button>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Our_products;
