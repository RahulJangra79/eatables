import React from "react";
import "./Component5.css"
import { component5Data } from "./data/Component5Data";

const Component5 = () => {

    return(
        <div className="component-5">
            <div className="bigger-products">
                <div className="bigger-product-items">
                    {component5Data.map((item, index)=>{
                        return(
                            <div className="bigger-product-item">
                                <div className="bigger-product-item-image" id={item.imageid}></div>
                                <div className={item.big_sld_clr_class}></div>
                                <div className="bigger-product-item-center-part">
                                    <h3>{item.name}</h3>
                                    <p>{item.offer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Component5