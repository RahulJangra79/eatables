import React from "react";
import "./Our_products.css"
import { productsData } from "./data/ProductsData";
const Our_products = () => {
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
                                        <button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Order Now</button>
                                    </div>
                                </div>
                            </div>
                            )
                           }) }

                            {/* <div className="product-item">
                                <div className="product-image" id="samosa2"></div>
                                <div className="product-down-part">
                                    <h3>Samosa</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="order-details">
                                        <h3 className="product-price">$ 4.9</h3>
                                        <button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-item">
                                <div className="product-image" id="steam-momos3"></div>
                                <div className="product-down-part">
                                    <h3>Steam Momos</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="order-details">
                                        <h3 className="product-price">$ 4.9</h3>
                                        <button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-item">
                                <div className="product-image" id="dahi-golgappe4"></div>
                                <div className="product-down-part">
                                    <h3>Dahi Golgappe</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="order-details">
                                        <h3 className="product-price">$ 4.9</h3>
                                        <button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Order Now</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="product-item">
                                <div className="product-image" id="noodles5"></div>
                                <div className="product-down-part">
                                    <h3>Noodles</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="order-details">
                                        <h3 className="product-price">$ 4.9</h3>
                                        <button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-item">
                                <div className="product-image" id="spring-roll6"></div>
                                <div className="product-down-part">
                                    <h3>Spring Roll</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="order-details">
                                        <h3 className="product-price">$ 4.9</h3>
                                        <button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-item">
                                <div className="product-image" id="manchurian7"></div>
                                <div className="product-down-part">
                                    <h3>Manchurian</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="order-details">
                                        <h3 className="product-price">$ 4.9</h3>
                                        <button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-item">
                                <div className="product-image" id="pizza8"></div>
                                <div className="product-down-part">
                                    <h3>Pizza</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="order-details">
                                        <h3 className="product-price">$ 4.9</h3>
                                        <button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Order Now</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Our_products