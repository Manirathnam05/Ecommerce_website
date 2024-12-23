import React, { useState, useEffect } from "react";
import all_product from "../../assets/all_product";
import "./../cartall/Cartall.css";
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
  

const Cartall = () => {

  

  const [cart, setCart] = useState([]);

  const notify = () => toast("Your order is confirmed!", {
    style: {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid black'
    }
  });
  

  


  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.new_price * item.quantity,
    0
  );

  return (
    <div className="containered">
      <h1>Product List</h1>
      <div className="product-listed">
        {all_product && all_product.length > 0 ? (
          all_product.map((product) => (
            <div key={product.id} className="product-itemed">
              <img src={product.image} alt={product.name} className="product-imagese" />
              <h3>{product.name}</h3>
              <p>Price: ${product.new_price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products available!</p>
        )}
      </div>

      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="cartall">
          {cart.map((item) => (
            <div key={item.id} className="cart-itemall">
              <img src={item.image} alt={item.name} className="cart-image" />
              <div className="cart-detailsall">
                <h4>{item.name}</h4>
                <p>
                  ${item.new_price} x {item.quantity} = $
                  {(item.new_price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                -
              </button>
              <span className="quantityall">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
              <button onClick={() => removeFromCart(item.id)}
                className="remove-buttonall"
              >
                Remove
              </button>
            </div>
          ))}
          <h3 className="total">Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
      <div className="order-container">
        <button onClick={notify} className="order-button">Place Order</button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cartall;
