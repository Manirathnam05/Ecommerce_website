import React from 'react';
import Hero from "../compounent/hero/Hero"; 
import Popular from '../compounent/popular/Popular';
import Offer from '../compounent/offers/Offer';
import NewCollection from '../compounent/newCollection/NewCollection';
import NewsLetter from '../compounent/Newsletter/NewsLetter';
const Shop = () => {
  return (
    <div className='shop-div'>
     <Hero/>
     <Popular/>
     <Offer/>
     <NewCollection/>
     <NewsLetter/>
    </div>
  )
}

export default Shop;
