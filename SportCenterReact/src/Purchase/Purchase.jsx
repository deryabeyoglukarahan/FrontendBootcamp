import React from "react";
import "./Purchase.css";

const Purchase =()=>{
    return (

        <section className="section-white p">
            <div className="purchase">
                <h2>PURCHASE FROM US</h2>
                <div className="purchase-p">
                    <p>Lorem ıpsum is not simply random text. It has roots in a piece of classical at</p>
                    <p>Hampden-Sydney College</p>
                </div>
                <div className="purchase-boxes">
                    <div className="purchase-box">
                        <img src="images/purchase1.jpg" alt="purchase1"/>
                        <div className="box-bottom">
                        <p>Kettleebell / 5kg</p>
                        <span><del>89,99$</del>/ 59,99$</span><br/>
                        <div className="icon">
                            <span><i className="fa-solid fa-cart-shopping" ></i></span>
                            <span>Add To Card</span>
                            </div>
                        </div>
                    </div>
                    <div className="purchase-box">
                        <img src="/images/purchase2.jpg" alt="purchase2"/>
                        <div className="box-bottom">
                        <p>Treadmill</p>
                        <span><del>899,99$</del>/ 599,99$</span><br/>
                        <div className="icon">
                            <span><i className="fa-solid fa-cart-shopping" ></i></span>
                            <span>Add To Card</span>
                            </div>
                        </div>
                    </div>
                    <div className="purchase-box">
                        <img src="/images/purchase3.jpg" alt="purchase3"/>
                        <div className="box-bottom">
                        <p>Adjustable Dumbbell</p>
                        <span><del>89,99$</del>/ 59,99$</span><br/>
                        <div className="icon">
                            <span><i className="fa-solid fa-cart-shopping" ></i></span>
                            <span>Add To Card</span>
                            </div>
                        </div>
                    </div>
                    <div className="purchase-box">
                        <img src="/images/purchase4.jpg" alt="purchase4"/>
                        <div className="box-bottom">
                        <p>Kettlebell / 3kg</p>
                        <span><del>89,99$</del>/ 59,99$</span><br/>
                        <div className="icon">
                        <span><i className="fa-solid fa-cart-shopping" ></i></span>
                        <span>Add To Card</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Purchase;