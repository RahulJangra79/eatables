import React from "react";
import "./Header.css"

const Header = () => {
  return(
        <div>
            <div className="navbar">
                <div className="navbar1">
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
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Shop Detail</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="three-arrow-icon">
                        <i class="fa-solid fa-bars"></i>
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