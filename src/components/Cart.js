import React from "react";
import "./Cart.css"
import { CartData } from "./data/CartData";

const Cart = () => {

    return(
        <>
            <div className="cart-image">
                <h1 className="cart-image-heading">Cart</h1>
            </div>

            <div className="cart-section-2">
                <div className="cart-title"> 
                    <div>Products</div>
                    <div>Name</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Total</div>
                    <div>Handle</div>               
                </div>

                <div className="cart-items-img">
                        {CartData.map((item, index) => {
                            return(
                                <div className="cart-items-img-1">
                                    <div className={item.imageClass}></div>
                                    <div className="product-name">{item.name}</div>
                                    <div className="product-price">{item.price}</div>
                                    <div className="plus-minus"><button className="plus"><i class="fa-solid fa-minus"></i></button><span className="qty-no">5</span><button className="plus"><i class="fa-solid fa-plus"></i></button></div>
                                    <div className="product-total-price">{item.totalPrice}</div>
                                    <button className="cross-icon"><i class="fa-solid fa-xmark"></i></button>
                                </div>
                            )
                        })}
                </div>
            </div>

            <div className="cart-section-3">
                <input placeholder="Coupon Code" className="input-field"></input>
                <button className="coupon">Apply Coupon</button>
            </div>

            <div className="cart-section-4">
                    <h1 className="cart-total"><span className="cart-total-font-weight">Cart</span> Total</h1>
                   <div className="cart-total-2">
                        <div className="subtotal">Subtotal</div>
                        <div className="subtotal-price">$ 8.99</div>
                   </div>
                   <div className="cart-total-2">
                        <div className="shipping">Shipping</div>
                        <div className="shipping-price">
                            <p> Flat rate: $3.00</p>
                            <p className="line-space"> Shipping to Ukraine.</p>
                        </div>
                   </div>
                   <div className="cart-total-2 total-border">
                        <div className="total">Total</div>
                        <div className="total-price">$ 9.99</div>
                   </div>
                   <div>
                        <button className="coupon">PROCEED CHECKOUT</button>
                    </div>
            </div>
        </>
    )
}

export default Cart