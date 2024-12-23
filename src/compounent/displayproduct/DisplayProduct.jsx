import React from 'react';
import "./DisplayProduct.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { Link } from 'react-router-dom';


const DisplayProduct = (props) => {
    const {product} = props;

    
  return (
    <div className="productdisplay">
        <div className="pd-left">
            <div className="pd-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" /> 
                <img src={product.image} alt="" /> 
                <img src={product.image} alt="" />
            </div>
            <div className="pd-img-main">
                <img src={product.image} alt="" />
            </div>
        </div>
      
        {/* --------------------------------right side */}
      <div className='pd-right'>
      <h1>{product.name}</h1>
        <div className="pd-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon}/>
            <p>(122)</p>
        </div>
        <div className="pd-right-prices">
            <div className="prices-old">
                ${product.old_price}
            </div>
            <div className="price-new">
                ${product.new_price}
            </div>
        </div>
        <div className="pd-right-des">
            A lightweight, usually knitted,pullover shirt,close-fitting and 
            a round neckline and short sleeves,worn as an undershirt or outer garment.
        </div>
        <div className="pd-sizes">
            <h1>Select Size</h1>
            <div className="pd-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>

            </div>
        </div>
       <Link to={"/cart"}> <button>open to cart</button></Link>
        <p className="pd-category"><span>Category:</span>women, t-shirt, crop top</p>
        <p className="pd-category"><span>Tags:</span>Modern,Latest</p>

      </div>
      
    </div>
  )
};

export default DisplayProduct;
