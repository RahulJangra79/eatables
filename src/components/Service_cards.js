import React from "react";
import "./Service_cards.css"
import {service} from "./data/ServiceCardContent.js";
const Service_card = () => {
    console.log("data=>", service)
    return(
        <div className="service-card-outer"> 
            <div className="service-detail-card">
                {service.map((item,index)=>{
                  return ( <div key={index} className="service-detail-card-item">
                    <i class={`${item.icon}`}></i>
                    <h5 className="heading-5-service-card">{item.title}</h5>
                    <p className="paragraph-service-card">{item.paragrph}</p>
                </div>)
                })}
            </div>
        </div>
    )
}

export default Service_card