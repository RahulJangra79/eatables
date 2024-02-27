import React from "react";
import "./Service_cards.css"

const Service_card = () => {
    return(
        <div className="service-card-outer">
            <div className="service-detail-card">
                <div className="service-detail-card-item">
                    <i class="fa-solid fa-car-side"></i>
                    <div className="rotated-square"></div>
                    <h5 className="heading-5-service-card">Free Shipping</h5>
                    <p className="paragraph-service-card">Free on order over $100</p>
                </div>
                <div className="service-detail-card-item">
                    <i class="fa-solid fa-user-shield"></i>
                    <h5 className="heading-5-service-card">Security Payment</h5>
                    <p className="paragraph-service-card">100% secure payment</p>
                </div>
                <div className="service-detail-card-item">
                    <i class="fa-solid fa-clock"></i>
                    <h5 className="heading-5-service-card">30 Min Delivery</h5>
                    <p className="paragraph-service-card">Guaranteed delivery on time</p>
                </div>
                <div className="service-detail-card-item">
                    <i class="fa-solid fa-phone"></i>
                    <h5 className="heading-5-service-card">24/7 Support</h5>
                    <p className="paragraph-service-card">Support every time fast</p>
                </div>
            </div>
        </div>
    )
}

export default Service_card