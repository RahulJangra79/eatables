import React from "react";
import "./review.css"
import { reviewData } from "./data/ReviewData";

const Review = () =>{
    return(
        <div className="component9">
            <div className="custmer1">
                {reviewData.map((item, index) =>{
                    return(
                        <div className="custmer2"><i class="fa-solid fa-users"></i>
                            <h2 className="custmer3">{item.name}</h2>
                            <h1>{item.year}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Review