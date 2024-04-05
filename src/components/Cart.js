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
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th className="cart-table-heading-first">Products</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th className="cart-table-heading-first">Handle</th>
                        </tr>
                    </thead>

                    <tbody>
                        {CartData.map((item, index) => {
                            return(
                                <tr>
                                    <td><div className={item.imageClass}></div></td>
                                    <td className="product-name">{item.name}</td>
                                    <td className="product-price">{item.price}</td>
                                    <td className="plus-minus">
                                        <button className="plus"><i className="fa-solid fa-minus"></i></button>
                                        <span className="qty-no">5</span>
                                        <button className="plus"><i className="fa-solid fa-plus"></i></button>
                                    </td>
                                    <td className="product-total-price">{item.totalPrice}</td>
                                    <td><button className="cross-icon"><i class="fa-solid fa-xmark"></i></button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
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
                        </div>
                   </div>
                   <div className="cart-total-2 total-border">
                        <div className="total">Total</div>
                        <div className="total-price">$ 9.99</div>
                   </div>
                   <div className="proceed-checkout">
                        <button className="coupon">PROCEED CHECKOUT</button>
                    </div>
            </div>
        </>
    )
}

export default Cart