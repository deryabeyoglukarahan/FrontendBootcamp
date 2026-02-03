import React from "react";
import "./Header.css";


const Header=()=>{
    return(

<header className="header" id="header">

<nav className="navbar" id="navbar">
    <div className="logo">
        <img src="/images/logo.png" alt="logo" /> 
    </div>
    <i className="fa-solid fa-bars menu-hmbrgr" id="menu-hmbrgr"></i>
    <ul>
       <li><a href="#header">Home</a></li> 
       <li><a href="#classes">Classes</a></li> 
       <li><a href="#trainer">Trainer</a></li> 
       <li><a href="#review">Review</a></li>
       <li><a href="#contact">Contact</a></li>
       <li><a href="#joinus">Join Us</a></li>

    </ul>

</nav>

<div className="home" id="home">
    <a href="#" className="home-button">POWERFULL</a>
    <div className="home-top-h1">
        <h1>Group Practice With Trainer</h1>
    </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit aut
        iste. Velit porro rerum, unde modi ipsam exercitationem laudantium
        illum. Id, laborum? Totam, dicta nisi. Voluptates, vero id. Perferendis.
        </p>
    <div className="home-buttons">
        <a href="#" className="sign-up">Sign Up</a>
        <a href="#" className="details">Details</a>
    </div>
</div>
</header>
);
}
export default Header;