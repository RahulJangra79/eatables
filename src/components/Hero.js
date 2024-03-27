import React from "react";
import "./Hero.css"
import 'bootstrap/dist/css/bootstrap.css'; 

const Hero = (props) => {
    console.log("Props=>", props)
    const {title, des, buttonTitle} = props.data;
    return(
        <div className="hero-main">
            <div className="hero-sections">
                <div className="heading-and-search">
                    <div className="delicious-taste">{title}</div>
                    <h1 className="best-chinese-italian">{des}</h1>
                    <div class="row">
                        <input className="input-box" type="text" placeholder="Search"></input>
                        <button className="search-button-hero">{buttonTitle}</button>
                    </div>
                </div>
                <div className="carousel">
                    
                </div>
            </div>
        </div>
    )
}

export default Hero