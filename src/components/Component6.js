import React from "react";
import "./Our_products.css"
import { component6Data } from "./data/Component6Data";

const Component6 = () => {
    return(
        <div className="component-6">
            <div className="products">
                <div>
                    <h1 className="h1-our-product">Delicious Fast Food</h1>
                </div>
                    <div className="product-gallery">
                        <div className="product-gallery-row">
                        {component6Data.map((item, index)=>{
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
                                <div className="product-image" id="burger1"></div>
                                <div className="product-down-part">
                                    <h3>Burger</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                    <div className="order-details">
                                        <h3 className="product-price">$ 4.9</h3>
                                        <button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className="product-item">
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
                            </div> */}
                        </div>
                    </div>

            </div>
        </div>

    )
}
export default Component6