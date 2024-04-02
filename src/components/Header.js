import React, { useState } from "react";
import "./Header.css"
import { Link } from "react-router-dom"
import Cart from "./Cart";

const Header = () => {

    const [isButtonClosed, setIsButtonClosed] = useState(false);

    const [isHamburgershow, setIsHamburgershow] = useState(false);
    

    const changehamburger = () => {
        setIsHamburgershow(!isHamburgershow);
    }

    const hamburgerFunction = () => {
        setIsButtonClosed(!isButtonClosed);
        setIsHamburgershow(!isHamburgershow);
    }

  return(
        <div>
            <div className="navbar">
                <div className="navbar1 d-sm-none d-md-none d-lg-flex">
                    <div className="navbar1-left-side">
                        <p><i class="fas fa-map-marker-alt me-1 text-orange"></i> <a href="#" class="text-white">123 Street, New York</a></p>
                        <p><i class="fas fa-envelope me-2 text-orange"></i><a href="#" class="text-white">Email@Example.com</a></p>
                    </div>
                    <div className="navbar1-right-side">
                        <a href="#" class="text-white mx-1"><p class="text-white">Privacy Policy<span>/</span></p></a>
                        <a href="#" class="text-white"><p class="text-white">Terms of Use<span>/</span></p></a>
                        <a href="#" class="text-white"><p class="text-white">Sales and Refunds</p></a>
                    </div>
                </div>

                <div className="navbar2">
                    <div className="eatables-h1">
                        <h1>Eatables</h1>
                    </div>

                    <div className={` ${isHamburgershow ? "nav" : "nav-menu" }`}>

                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <Link className="nav-link" to="/" onClick={changehamburger}>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="our_products" onClick={changehamburger}>Shop</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="bestseller" onClick={changehamburger}>Shop Detail</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="footer" onClick={changehamburger}>Contact</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="three-arrow-icon">
                        <i className={`fa-solid ${isButtonClosed ?  "fa-xmark" : "fa-bars"}`} onClick={hamburgerFunction}></i>
                    </div>


                    <div className="nav-icons">
                        <div className="search-magnifying-glass">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="cart-shopping-bag">
                            <Link to="cart">
                                <i class="fa-solid fa-bag-shopping"></i>
                                {/* <span className="cart-value">3</span> */}
                            </Link>
                        </div>
                        <div className="user-profile">
                            <i class="fa-solid fa-user"></i>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Header