import React from "react";
import "./Bestseller.css";
import { bestsellerData } from "./data/BestsellerData";
import { bestsellerData_second } from "./data/BestsellerData";

const Products = () => {
  return (
    <div className="component8">
      <div className="bestseller">Bestseller Products</div>
      <p className="bestseller-des">
        Latin words, combined with a handful of model sentence structures, to
        generate Lorem Ipsum which looks reasonable.
      </p>

      <div className="bestseller-products-items">
        <div className="bestseller-products-items-1">
          {bestsellerData.map((item, index) => {
            return (
              <div className="bestseller-border">
                <div className={item.imageclass}></div>
                <div className="same">
                  <div className="product-rating-name">{item.name}</div>
                  <div className="product-rating-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                  <div className="product-rating-price">{item.price}</div>
                  <button className="product-rating-buy-now-btn">
                    <i class="fa-solid fa-cart-shopping"></i>Order Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bestseller-second-component">
        {bestsellerData_second.map((item, index) => {
          return (
            <div className="bestseller-second-component-items">
              <div className={item.imageclass}></div>
              <div className="bestseller-second-component-image1-des">
                <div className="bestseller-second-component-image1-des-name">
                  {item.name}
                </div>
                <div className="bestseller-second-component-image1-des-star">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className="bestseller-second-component-image1-des-price">
                  {item.price}
                </div>
                <div className="bestseller-second-component-image1-des-buy-btn">
                  <i class="fa-solid fa-cart-shopping"></i>Order Now
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="bestseller-second-component-items">
                    <div className="bestseller-second-component-image1"></div>
                    <div className="bestseller-second-component-image1-des">
                        <div className="bestseller-second-component-image1-des-name">Pizza</div>
                        <div className="bestseller-second-component-image1-des-star"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                        <div className="bestseller-second-component-image1-des-price">15.99 $</div>
                        <div className="bestseller-second-component-image1-des-buy-btn"><i class="fa-solid fa-cart-shopping"></i>Order Now</div>
                    </div>
                </div>
                <div className="bestseller-second-component-items">
                    <div className="bestseller-second-component-image2"></div>
                    <div className="bestseller-second-component-image2-des">
                        <div className="bestseller-second-component-image1-des-name">Steam Momos</div>
                        <div className="bestseller-second-component-image1-des-star"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                        <div className="bestseller-second-component-image1-des-price">7.50 $</div>
                        <div className="bestseller-second-component-image1-des-buy-btn"><i class="fa-solid fa-cart-shopping"></i>Order Now</div>
                    </div>
                </div>
                <div className="bestseller-second-component-items">
                    <div className="bestseller-second-component-image3"></div>
                    <div className="bestseller-second-component-image3-des">
                        <div className="bestseller-second-component-image1-des-name">Pani Golgappe</div>
                        <div className="bestseller-second-component-image1-des-star"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                        <div className="bestseller-second-component-image1-des-price">4.79 $</div>
                        <div className="bestseller-second-component-image1-des-buy-btn"><i class="fa-solid fa-cart-shopping"></i>Order Now</div>
                    </div>
                </div>
                <div className="bestseller-second-component-items">
                    <div className="bestseller-second-component-image4"></div>
                    <div className="bestseller-second-component-image4-des">
                        <div className="bestseller-second-component-image1-des-name">Samosa</div>
                        <div className="bestseller-second-component-image1-des-star"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                        <div className="bestseller-second-component-image1-des-price">6.89 $</div>
                        <div className="bestseller-second-component-image1-des-buy-btn"><i class="fa-solid fa-cart-shopping"></i>Order Now</div>
                    </div>
                </div> */}
      </div>
    </div>
  );
};
export default Products;
