import React from "react";
import "./footer.css"

const Footer = () =>{
    return(
        <div className="component11">
            <div className="footer">
                <div className="fresh">
                    <div className="eatables-footer-logo">
                        <h1>Eatables</h1>
                    </div>
                    <div className="search-bar-footer">
                        <input className="search-bar-input-box-footer" type="text" placeholder="Your Email"></input>
                        <button className="search-button-footer">Subscribe Now</button>
                    </div>
                    <div className="social-media-icons-footer">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <hr/>



                <div class="foot-panel2">
                <ul>
                    <p>Why People Like us!</p>
                    <a>typesetting, remaining</a> 
                    <a>essentially unchanged. It was</a>
                    <a>popularised in the 1960s with</a>
                    <a>the like Aldus PageMaker</a>
                    <a>including of Lorem Ipsum.</a>
                    <div className="read">Read More</div>
                </ul>
                <ul>
                    <p>Shop Info</p>
                    <a>About Us</a>
                    <a>Contact Us</a>
                    <a>Privacy Policy</a>
                    <a>Terms & Condition</a>
                    <a>Return Policy</a>
                    <a>FAQs & Help</a>
                </ul>
                <ul>
                    <p>Account</p>
                    <a>My Account</a>
                    <a>Shop details</a>    
                    <a>Shopping Cart</a>    
                    <a>Wishlist</a>    
                    <a>Order History</a>    
                    <a>International Orders</a>
                    
                </ul>
                <ul>
                    <p>Contact</p>
                    <a>Address: 1429 Netus Rd, NY</a> 
                    <a>48247</a>
                    <a>Email: Example@gmail.com</a>
                    <a>Phone: +0123 4567 8910</a>
                    <a>Payment Accepted</a>
                    <div className="isha1"></div>
                </ul>
                
            </div>
            <div className="last">
                <div className="last1">
                <i class="fa-regular fa-copyright"></i>
                Eatables, All right reserved.
                </div>
                <div className="last2">
                Designed By HTML Codex Distributed By ThemeWagon
                </div>
            </div>
            </div>
            
        </div>
    )

}
export default Footer