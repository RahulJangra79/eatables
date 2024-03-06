import React from "react";
import "./Hero.css"
import 'bootstrap/dist/css/bootstrap.css'; 

const Hero = () => {
    return(
        <div className="hero-main">
            <div className="hero-sections">
                <div className="heading-and-search">
                    <div className="delicious-taste">100% Original Taste</div>
                    <h1 className="best-chinese-italian">Best Chinese & Italian Food</h1>
                    <div class="row">
                        <input className="input-box" type="text" placeholder="Search"></input>
                        <button className="search-button-hero">Search</button>
                    </div>
                </div>
                <div className="carousel">
                    
                </div>
            </div>
        </div>
    )
}

export default Hero