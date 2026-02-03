import React from "react";
import "./HomeBoxes.css";

const HomeBoxes=()=>{
    return(
        <section className="section-blue pad">
        <div className="boxes">
            <div className="home-box">
                 <span>325</span>
                 <p>Course</p>
            </div>
            <div className="home-box">
                <span>405</span>
                <p>Work Out</p> 
            </div>
            <div className="home-box">
                <span>305</span>
                <p>Working Hour</p>
            </div>
            <div className="home-box">
                <span>705</span>
                <p>Happy Client</p>
            </div>
            </div>
    </section>
    );
}
export default HomeBoxes;