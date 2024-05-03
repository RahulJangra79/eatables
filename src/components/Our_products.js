import React, {useEffect, useState} from "react";
import "./Our_products.css"
import axios from 'axios';
import Swal from 'sweetalert2';

const Our_products = () => { 

    const handleCart = (product) => {
        let cartProducts = localStorage.getItem('cartProducts');
        if (cartProducts) {
            cartProducts = JSON.parse(cartProducts);
        }
        else {
            cartProducts = [];
        }
        cartProducts.push(product);
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
        console.log('Cart Products:' , JSON.parse(localStorage.getItem('cartProducts')));

        Swal.fire({
            icon: 'success',
            title: 'Product Added To Cart'
          });
    }

    function truncateDescription(description, maxLength) {
        if (description.length > maxLength) {
          return `${description.substring(0, maxLength)}...`;
        }
        return description;
      }

    const [productData, setProductData] = useState();
    
    useEffect(()=>{
        axios.get("http://localhost:5000/products")
        .then((response)=>{
            console.log("responseData=>", response.data.products);
            setProductData(response.data.products);

        }).catch((err)=>{
            console.log("Error=>", err);
        });
    },[])
    return(
        <div className="component-4">
            <div className="products">
                <div>
                    <h1 className="h1-our-product">Our Products</h1>
                </div>
                    <div className="product-gallery">
                        <div className="product-gallery-row">
                           {productData?.map((item, index)=>{
                            return (
                                <div className="product-item">
                                <div className="product-image" id={item.imageid}></div>
                                <div className="product-down-part">
                                    <h3>{item.name}</h3>
                                    <p>{truncateDescription (item.description,70)}</p>
                                    <div className="order-details">
                                        <h3 className="product-price">$ {item.price}</h3>
                                        <button className="order-now-button" onClick={() => handleCart(item)} ><span><i class="fa-solid fa-cart-shopping"></i></span>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            )
                           }) }

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
