import React from 'react';
import "../Relatedproduct/Related.css";
import data_product from "../../assets/data";
import Item from '../item/Item';

const Related = () => {
  return (
    <div className='Related'>
    <h1>Related Products</h1>
      <hr/>
      <div className='Related-item'>
        {data_product.map((item,index)=>{
          return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Related;
