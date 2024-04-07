import React from "react";
import "./Footer1.css"

const Footer1 =() => {
    return(
        <>
            <div className="footer">
                <div className="footer-section-1">
                    <div className="footer-heading">Eatables</div>
                    <div className="footer-searchbar">
                        <input className="search-bar-input-box-footer" type="text" placeholder="Your Email"></input>
                        <button className="search-button-footer">Subscribe Now</button>
                    </div>
                    <div className="footer-icons">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                 <hr/>

                 <div className="footer-section-2">
                    <div className="footer-section-2-first">
                        <ul>
                            <li><h2>Why People Like us!</h2></li>
                            <li><a>typesetting, remaining</a></li>
                            <li><a>essentially unchanged. It was</a></li>
                            <li><a>popularised in the 1960s with</a></li>
                            <li><a>the like Aldus PageMaker</a></li>
                            <li><a>including of Lorem Ipsum.</a></li>
                         </ul>
                    </div>

                    <div className="footer-section-2-first">
                        <ul>
                            <li><h2>Shop Info</h2></li>
                            <li><a>About Us</a></li>
                            <li><a>Contact Us</a></li>
                            <li><a>Privacy Policy</a></li>
                            <li><a>Terms & Conditions</a></li>
                            <li><a>Return Policy</a></li>
                            <li><a>FAQs & Help</a></li>
                        </ul>
                    </div>

                    <div className="footer-section-2-first">
                        <ul>
                            <li><h2>Account</h2></li>
                            <li><a>My Account</a></li>
                            <li><a>Shop Details</a></li>
                            <li><a>Shopping Cart</a></li>
                            <li><a>Wishlist</a></li>
                            <li><a>Order History</a></li>
                            <li><a>International Orders</a></li>
                        </ul>
                    </div>

                    <div className="footer-section-2-first">
                        <ul>
                            <li><h2>Contact</h2></li>
                            <li><a>Address : 1429 Netus Rd, NY</a></li>
                            <li><a>48869</a></li>
                            <li><a>Email: Example@gmail.com</a></li>
                            <li><a>Phone: +0123 4567 8910</a></li>
                            <li><a>Payment Accepted</a></li>
                        </ul>
                    </div>
                 </div>

                 <div className="footer-section-3">
                    <button>Read More</button>
                 </div>

                 <div className="footer-section-4">
                    <div className="footer-end-1"><span>Eatables</span>,All Rights Reserved</div>
                    <div className="footer-end-2">Designed By HTML Codex Distributed By ThemeWagon</div>
                 </div>


            </div>
        </>
    )
}

export default Footer1