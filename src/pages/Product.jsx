import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../compounent/Context/Contexted';
import { useParams } from 'react-router-dom';
import Brudcrum from '../compounent/Brudcrum/Brudcrum';
import DisplayProduct from '../compounent/displayproduct/DisplayProduct';
import Description from '../compounent/Descriptionbox/Description';
import Related from '../compounent/Relatedproduct/Related';


const Product = () => {
 const all_product = useContext(ShopContext);
 const {productId} = useParams();
 const product = all_product.find((e)=>e.id === Number(productId));
 
  return (
    <div className="product">
      <Brudcrum product ={product}/>
      <DisplayProduct  product={product}/>
      <Description/>
      <Related/>
    </div>
  )
}

export default Product;
