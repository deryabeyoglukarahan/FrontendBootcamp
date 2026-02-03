import React from "react";
import "./Review.css"

const Review =()=>{
    return(
        <section className="section-blue" id="review">
            <div className="review">
                <h2>REVIEW CLIENT </h2>
                <div className="review-p">
                    <p className="review-p-1">Lorem ıpsum is not simply random text. It has roots in a piece of classical at</p>
                    <p className="review-p-2">Hampden-Sydney College.</p>
                </div>
                <div className="review-boxes">
                    <div className="review-box">
                        <div className="review-top">
                            <div className="review-img">
                                <img src="/images/client1.jpg" alt="client1"/>
                            </div>
                            <div className="review-top-info">
                                <p>Diet Expert</p>
                                <span>CFO</span>
                            </div>
                        </div>
                        <div className="review-bottom">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi quia, libero voluptatibus ducimus
                                earum quidem minus eveniet, ex esse rem sed numquam. Error magnam in vero molestiae tempora nostrum.
                            </p>
                        </div>
                    </div>
                    <div className="review-box">
                        <div className="review-top">
                                <div className="review-img">
                                    <img src="/images/client2.jpg" alt="client2"/>
                                </div>
                                <div className="review-top-info">
                                    <p>Cardio Trainer</p>
                                    <span>CEO</span>
                                </div>
                            </div>
                        <div className="review-bottom">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, sequi quia, libero voluptatibus ducimus
                                earum quidem minus eveniet, ex esse rem sed numquam. Error magnam in vero molestiae tempora nostrum.
                            </p>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Review;