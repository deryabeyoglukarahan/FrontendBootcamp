import React from "react";
import "./Footer.css";

const Footer=()=>{
    return(
        <footer className="footer">
        <div className="footer-top">
            <img src="/images/logo.png" alt="logo"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quod, quae, voluptate, voluptas quia quibusdam
                 voluptatibus quos doloribus quidem fugiat. Quisquam voluptatum, quod, quae, voluptate, voluptas quia quibusdam voluptatibus 
                 quos doloribus quidem fugiat.</p>
        </div>
        <div className="footer-bottom">
            <div className="footer-links">
                <h3>Information</h3>
                <a href="#">About Us</a>
                <a href="#">Classes</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            <div className="footer-links">
                <h3>Helpful links</h3>
                <a href="#">Services</a>
                <a href="#">Supports</a>
                <a href="#">Terms & Condition</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </footer>
    );
}
export default Footer;