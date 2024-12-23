import React from 'react';
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className='Newsletter'>
        <h1>get exclusive offers on your email</h1>
        <p>subcribe to our newletter and stay updated</p>
        <div>
            <input type='email' placeholder='your Email id' autoComplete='off'/>
            <button>subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetter;
