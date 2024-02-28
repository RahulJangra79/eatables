import React from "react";
import "./Component5.css"

const Component5 = () => {
    return(
        <div className="component-5">
            <div className="bigger-products">
                <div className="bigger-product-items">
                    <div className="bigger-product-item">
                        <div className="bigger-product-item-image" id="fries-11"></div>
                        <div className="bigger-product-solid-color-orange"></div>
                        <div className="bigger-product-item-center-part">
                            <h3>French Fries</h3>
                            <p>20% OFF</p>
                        </div>
                    </div>
                    <div className="bigger-product-item">
                        <div className="bigger-product-item-image"  id="kachori-22"></div>
                        <div className="bigger-product-solid-color-maroon"></div>
                        <div className="bigger-product-item-center-part">
                            <h3>Special Kachori</h3>
                            <p>Free Delivery</p>
                        </div>
                    </div>
                    <div className="bigger-product-item">
                        <div className="bigger-product-item-image"  id="fry-momos-33"></div>
                        <div className="bigger-product-solid-color-yellow"></div>
                        <div className="bigger-product-item-center-part">
                            <h3>Fry Momos</h3>
                            <p>$ 1.99 Discount</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component5