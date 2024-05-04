import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  const [isHamburgershow, setIsHamburgershow] = useState(false);

  const changehamburger = () => {
    setIsHamburgershow(!isHamburgershow);
  };

  const hamburgerFunction = () => {
    setIsHamburgershow(!isHamburgershow);
  };

  return (
    <div>
      <div className="navbar">
        <div className="navbar1">
          <div className="navbar1-left-side">
            <p className="navbar1-left-side-para">
              <i class="fa-solid orange fa-location-dot"></i>
              <a className="navbar1-left-side-link">123 Street, New York</a>
            </p>
            
            <p className="navbar1-left-side-para">
              <i class="fa-solid fa-envelope"></i>
              <a className="navbar1-left-side-link">Email@Example.com</a>
            </p>
          </div>
          <div className="navbar1-right-side">
            <a className="navbar1-right-side-link">
              <p className="navbar1-right-side-para">Privacy Policy<span>/</span></p>
            </a>

            <a className="navbar1-right-side-link">
              <p className="navbar1-right-side-para">Terms of Use<span>/</span></p>
            </a>
            
            <a className="navbar1-right-side-link">
              <p className="navbar1-right-side-para">Sales and Refunds</p>
            </a>
          </div>
        </div>

        <div className="navbar2">
          <div className="eatables-h1">
            <h1>Eatables</h1>
          </div>

          <div className={` ${isHamburgershow ? "nav" : "nav-menu"}`}>
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <Link className="nav-link" to="/" onClick={changehamburger}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link"
                  to="our_products"
                  onClick={changehamburger}
                >
                  Shop
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link"
                  to="cart"
                  onClick={changehamburger}
                >
                  Cart
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link"
                  to="contact"
                  onClick={changehamburger}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="three-arrow-icon">
            {/* <i className={`fa-solid ${isButtonClosed ?  "fa-bars" : "fa-bars"}`} onClick={hamburgerFunction}></i> */}
            <i className="fa-solid fa-bars" onClick={hamburgerFunction}></i>
          </div>

          <div className="nav-icons">
            <div className="user-profile">
              <i class="fa-solid fa-circle-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
