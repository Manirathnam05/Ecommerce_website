import React from 'react';
import "./NewCollection.css";
import new_collections from '../../assets/new_collections';
import Item from '../item/Item';

const NewCollection = () => {
  return (
    <div className='newcollection'>
        <h1>new collections</h1>
        <hr />
        <div className='newcollection-item'>
            {
                new_collections.map((item,index)=>{
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }

        </div>
      
    </div>
  )
}

export default NewCollection;
