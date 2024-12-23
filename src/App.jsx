import React, { useEffect } from 'react';
import Navbar from './compounent/Navbar/Navbar';
import "./App.css";
import { Route, Routes, useNavigate } from 'react-router-dom';
import Shopcategory from './pages/Shopcategory';
import Product from './pages/Product';
import Loginpage from './pages/Loginpage';
import Cartpage from './pages/Cartpage';
import Shop from './pages/Shop';
import men_banner from "./assets/banner_mens.png";
import women_banner from "./assets/banner_women.png";
import kids_banner from "./assets/banner_kids.png";
import Footer from './compounent/Footer/Footer';
import { onAuthStateChanged } from 'firebase/auth';
import { Auth } from './config/Firebase';

const App = () => {

const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      if (!user) {
        navigate("/");
      }
  
    });
  }, [navigate]);



  return (
    <div className='Ecommerce'>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Loginpage/>}></Route>
        <Route path="/shop" element={<Shop/>}> </Route>
        <Route path="/mens" element={<Shopcategory category="men" banner={men_banner}/>}></Route>
        <Route path="/womens" element={<Shopcategory category="women" banner={women_banner}/>}></Route>
        <Route path="/kids" element={<Shopcategory category="kid" banner={kids_banner} />}></Route>
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cartpage/>}></Route>
       
      </Routes>
     
     <Footer/>
      
    </div>
  )
}

export default App;
