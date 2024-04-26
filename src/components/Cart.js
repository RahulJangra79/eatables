import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Cart.css"
import { CartData } from "./data/CartData";
import { type } from "@testing-library/user-event/dist/type";
const Cart = () => {

    const [quantities, setQuantities] = useState(CartData.map(item => ({ id: item.id, quantity: 1 })));
    const [totalPrice, setTotalPrice] = useState(0);

    // Function to handle increasing quantity
    const increaseQuantity = (id) => {
        setQuantities(prevQuantities => 
            prevQuantities.map(qty => 
                qty.id === id ? { ...qty, quantity: qty.quantity + 1 } : qty
            )
        );
    };

    // Function to handle decreasing quantity
    const decreaseQuantity = (id) => {
        setQuantities(prevQuantities => 
            prevQuantities.map(qty => 
                qty.id === id && qty.quantity > 1 ? { ...qty, quantity: qty.quantity - 1 } : qty
            )
        );
    };


    useEffect(() => {
        // Calculate total price based on quantities
        let total = 0;
        CartData.forEach(item => {
            const quantity = quantities.find(qty => qty.id === item.id).quantity;
            total += item.price * quantity;
        });
        setTotalPrice(total);
    }, [quantities]);

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
                                    <button className="plus" onClick={() => decreaseQuantity(item.id)}><i className="fa-solid fa-minus"></i></button>
                                    <span className="qty-no">{quantities.find(qty => qty.id === item.id).quantity}</span>
                                    <button className="plus" onClick={() => increaseQuantity(item.id)}><i className="fa-solid fa-plus"></i></button>
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