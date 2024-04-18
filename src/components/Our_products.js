import React, {useEffect} from "react";
import "./Our_products.css"
import { productsData } from "./data/ProductsData";
import axios from 'axios';

const Our_products = () => {
    useEffect(()=>{
        axios.get("http://localhost:5000/products").then((response)=>{
            console.log("responseData=>", response)
        }).catch((err)=>{
            console.log("Error=>", err);
        });
    },[])
    console.log("products data=>",productsData)
    return(
        <div className="component-4">
            <div className="products">
                <div>
                    <h1 className="h1-our-product">Our Products</h1>
                </div>
                    <div className="product-gallery">
                        <div className="product-gallery-row">
                           {productsData.map((item, index)=>{
                            return (
                                <div className="product-item">
                                <div className="product-image" id={item.imageid}></div>
                                <div className="product-down-part">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <div className="order-details">
                                        <h3 className="product-price">$ {item.price}</h3>
                                        <button className="order-now-button" ><span><i class="fa-solid fa-cart-shopping"></i></span>Order Now</button>
                                    </div>
                                </div>
                            </div>
                            )
                           }) }
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Our_products