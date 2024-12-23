import React from 'react';
import "./Footer.css"; 
import logo from "../../assets/logo.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pinester_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";
import { Link } from 'react-router-dom';
const Footer = () => {
    const BottomtoTop=()=>{
        window.scrollTo(0,0)
      }
  return (
    <div className='footer'>
        <div className='footer-section1'>
            <img src={logo}/>
           <Link to={"/"}> <p>SandySpot</p></Link>
           <p className='backtoTop' onClick={BottomtoTop}>👆</p>
        </div>
        <div className='footer-links'>
            <ul>
                <li>company</li>
                <li>products</li>
                <li>offices</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>
        <div className='social-items'>
            <div className='social-cointainer'>
                <img src={instagram_icon}/>
            </div>
            <div className='social-cointainer'>
                <img src={pinester_icon}/>
            </div>
            <div className='social-cointainer'>
                <img src={whatsapp_icon}/>
            </div>
           
        </div>
        <hr/>
        <p className='footer-copy'>copyright @2024-2025 - All Right Reserved.</p>
      
    </div>
  )
}

export default Footer;
