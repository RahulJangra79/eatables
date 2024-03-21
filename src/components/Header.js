import React, { useState } from "react";
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {

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
                    <div className="nav-menu">
                        <ul class="nav justify-content-center">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="our_products">Shop</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="bestseller">Shop Detail</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-expanded="false">Pages</Link>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Contact</Link>
                            </li>
                        </ul>
                    </div>


                    <div className="three-arrow-icon">
                        <i class="fa-solid fa-bars"></i>
                        {/* <i className={`fa-solid ${isButtonClosed ? "fa-xmark hamburger-items" : "fa-bars"}`} onClick={changeIcon}></i> */}
                    </div>


                    <div className="nav-icons">
                        <div className="search-magnifying-glass">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="cart-shopping-bag">
                            <i class="fa-solid fa-bag-shopping"></i>
                            {/* <span className="cart-value">3</span> */}
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