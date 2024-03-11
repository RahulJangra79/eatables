import React from "react";
import "./testimonial.css"
import { testimonialData } from "./data/ReviewData";
const Testimonial = () =>{
    return(
        <div className="component10">
            <div className="test">
                <h2>Our Testimonial</h2>
            </div>
            <div className="test1">
                <h1>Our Client Saying!</h1>
            </div>
            <div className="test2">
            <div className="btn1">
            <i class="fa-solid fa-arrow-right-long"></i>
            </div>
            <div className="btn2">
            <i class="fa-solid fa-arrow-left-long"></i>    
            </div>
            </div>
            <div className="client">
                {testimonialData.map((item, index) => {
                    return(
                        <div className="client1">{item.description}
                 <hr/>
                 <div className={item.imageclass}>
                    <div className={item.imageclass}>
                        <h3>{item.name}</h3>
                        <p className="reviews-profession">{item.profession}</p>
                        <p>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </p>
                        <div className="icon"><i class="fa-solid fa-quote-right"></i></div>
                    </div>
                </div>
                </div>
                    )
                })}
            </div>
        </div>
        
    )
}
export default Testimonial