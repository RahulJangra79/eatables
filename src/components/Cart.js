import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Cart.css"
import Swal from 'sweetalert2';

const Cart = () => {

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const storedCartProducts = localStorage.getItem("cartProducts");
        if (storedCartProducts) {
            setCartProducts(JSON.parse(storedCartProducts));
        }
    }, []);

    const removeProductFromCart = (index) => {
        const updatedCartProducts = [...cartProducts];
        updatedCartProducts.splice(index, 1);
        setCartProducts(updatedCartProducts);
        localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));

        Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Product Removed From Cart',
      });
    };

    const handleIncrementQuantity = (index) => {
        const updatedCartProducts = [...cartProducts];
        const product = updatedCartProducts[index];
        product.quantity++;
        product.totalPrice = product.price * product.quantity;
        setCartProducts(updatedCartProducts);
        localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
    };

    const handleDecrementQuantity = (index) => {
        const updatedCartProducts = [...cartProducts];
        const product = updatedCartProducts[index];
        if (product.quantity > 1) {
            product.quantity--;
            product.totalPrice = product.price * product.quantity;
            setCartProducts(updatedCartProducts);
            localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
        }
    };
    const shippingCost = 3.00;

    const subTotal = cartProducts.reduce((total, product) => total + product.totalPrice, 0);

    const totalPrice = subTotal + shippingCost;

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
                        {cartProducts?.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>
                                    <img className="imageee-1" src={item.imageUrl}></img>
                                    </td>
                                    <td className="product-name">{item.name}</td>
                                    <td className="product-price">{item.price}</td>
                                    <td className="plus-minus">
                                    <button className="plus" onClick={() => handleDecrementQuantity(index)}><i className="fa-solid fa-minus"></i></button>
                                    <span className="qty-no">{item.quantity}</span>
                                    <button className="plus" onClick={() => handleIncrementQuantity(index)}><i className="fa-solid fa-plus"></i></button>
                                </td>
                                    <td className="product-total-price">{item.totalPrice}</td>
                                    <td><button className="cross-icon" onClick={() => removeProductFromCart(index)}><i class="fa-solid fa-xmark"></i></button></td>
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
                        <div className="subtotal-price">$ {subTotal}</div>
                   </div>
                   <div className="cart-total-2">
                        <div className="shipping">Shipping</div>
                        <div className="shipping-price">
                            <p> Flat rate: $3.00</p>
                        </div>
                   </div>
                   <div className="cart-total-2 total-border">
                        <div className="total">Total</div>
                        <div className="total-price">$ {totalPrice}</div>
                   </div>
                   <div className="proceed-checkout">
                        <button className="coupon">PROCEED CHECKOUT</button>
                    </div>
            </div>
        </>
    )
}

export default Cart