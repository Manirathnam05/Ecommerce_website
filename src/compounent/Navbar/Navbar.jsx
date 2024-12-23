import React, { useState } from 'react';
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import CartIcon from "../../assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { logout } from '../../config/Firebase';


const Navbar = () => {
    const [menu, setMenu] = useState("Shop");

    const handleMenuClick = (menuName) => {
        setMenu(menuName);
    };

    return (
        
        <nav className="Navbar">
            <div className="logo-container">
                <img src={Logo} alt="Shopper logo" />
               <Link to="/shop"><p>SandySpot</p></Link> 
            </div>
            <ul className="middle-link">
                <Link to="/shop"><li onClick={() => handleMenuClick("Shop")} className={menu === "Shop" ? "active" : ""}>Shop</li></Link>
                <Link to="/mens"><li onClick={() => handleMenuClick("Mens")} className={menu === "Mens" ? "active" : ""}>Mens</li></Link> 
                <Link to="/womens"> <li onClick={() => handleMenuClick("Women")} className={menu === "Women" ? "active" : ""}>Womens</li></Link> 
                <Link to="/kids"><li onClick={() => handleMenuClick("Kids")} className={menu === "Kids" ? "active" : ""}>Kids</li></Link> 
            </ul>
            <div className="cart">
           <Link to="/"><button>Login</button></Link> 
                <Link to="/cart"><img src={CartIcon} alt="Cart icon" /></Link>
                
            </div>

            <button className='logout-btn' onClick={()=>{logout()}}>Logout</button>
           
        </nav>
    );
};

export default Navbar;
