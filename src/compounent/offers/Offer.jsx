import React from 'react';
import "./Offer.css";
import Exclusive_image from "../../assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className='Offer'>
        <div className='left-offer'>
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>only on best sellers products</p>
            <button>Check Now</button>
        </div>
        <div className="right-offer">
            <img src={Exclusive_image} alt='exclusiveimage'/>
        </div>
      
    </div>
  )
}

export default Offer;
