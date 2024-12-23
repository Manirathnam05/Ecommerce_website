import React from 'react';
import "./Brudcrum.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";

const Brudcrum = (props) => {
  const {product} = props;
  return (
    <div className='Brudcrum'>
        HOME <img src={arrow_icon} alt=''/>
        SHOP  <img src={arrow_icon} alt=''/>
        {product.category}
        <img src={arrow_icon} alt=''/>
        {product.name}
      
    </div>
  )
}

export default Brudcrum;
