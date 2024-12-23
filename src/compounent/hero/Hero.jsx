import React from 'react';
import "./Hero.css";
import handIcon from "../../../src/assets/hand_icon.png";
import arrow from "../../../src/assets/arrow.png";
import heroIcon from "../../../src/assets/hero_image.png";


const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__left'>
        <h2>New Arrivals Only</h2>
        <div className='hero__left-center'>
          <p>
            New <img src={handIcon} alt="Hand Icon" />
          </p>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <button className="hero__button">
          Shop Now <img src={arrow}  alt="Arrow Icon" />
        </button>
      </div>
      <div className='hero__right'>
        <img src={heroIcon}  alt="Hero Section" className='hero__image' />
      </div>
    </div>
  );
};

export default Hero;
