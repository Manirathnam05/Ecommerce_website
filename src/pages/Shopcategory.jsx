import React, { useContext } from 'react';
import { ShopContext } from '/src/compounent/Context/Contexted.jsx';
import drop_down from "../assets/dropdown_icon.png";
import Item from '../compounent/item/Item';
import "../pages/css/Shopcategory.css";

const Shopcategory = (props) => {
  const all_product = useContext(ShopContext);
  
  if (!all_product || !Array.isArray(all_product)) {
    return <p>No products available</p>;
  }

  return (
    <div className='shopCategory'>
      <img className='shop-banner' src={props.banner} alt="Shop Banner" />
      <div className="indexspot">
        <p>
          <span>Showing 1-12</span> out of 1-36 products
        </p>
        <div className="shopcategory-sort">
        sort by <img src={drop_down} alt='dropdown' />
      </div>
      </div>
      
      <div className="sp-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            
            );
          } else {
            return null; 
          }
        })}
        
      </div>
      <div className="shop-loadmore">
          <button>Explore more</button>
      </div>
    </div>
  );
};

export default Shopcategory;
