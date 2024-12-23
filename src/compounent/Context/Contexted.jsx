import React, { createContext} from 'react';
import all_product from '../../assets/all_product';


export const ShopContext = createContext(null);
const Contexted = ({ children }) => {  
  return (
    <ShopContext.Provider value={all_product}>
      {children}
    </ShopContext.Provider>
  );
};

export default Contexted;
