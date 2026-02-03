import React from "react";
import "./Trainer.css";

const Trainer =()=>{
    return(
        <section className="section-blue p" id="trainer">
            <div className="trainers">
                <h2>OUR BEST TRAINERS</h2>
                    <div className="trainers-p">
                        <p>Lorem ıpsum is not simply random text. It has roots in a piece of classical at</p>
                        <p>Hampden-Sydney College</p>
                    </div>
                <div className="trainers-boxes">
                    <div  className="trainer-box">
                        <img src="/images/trainer1.jpg" alt="trainer1"/>
                        <div className="top-bar"></div>
                        <div className="bottom-bar"></div>
                        <div className="left-bar"></div>
                        <div className="right-bar"></div>
                        <div className="trainers-layer">
                            <h4>Alexa Gray</h4>
                            <p>Pilates Trainer</p>
                        </div>
                    </div>
                    <div className="trainer-box">
                        <img src="/images/trainer2.jpg" alt="trainer2"/>
                        <div className="top-bar"></div>
                        <div className="bottom-bar"></div>
                        <div className="left-bar"></div>
                        <div className="right-bar"></div>
                        <div className="trainers-layer">
                            <h4>Chris Evans</h4>
                            <p>Fitness Trainer</p>
                        </div>
                    </div>
                    <div className="trainer-box">
                        <img src="/images/trainer3.jpg" alt="trainer3"/>
                        <div className="top-bar"></div>
                        <div className="bottom-bar"></div>
                        <div className="left-bar"></div>
                        <div className="right-bar"></div>
                        <div className="trainers-layer">
                            <h4>Jane Doe</h4>
                            <p>Cardio Trainer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Trainer;