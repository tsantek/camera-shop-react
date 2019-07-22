import React from "react";
import CartItem from "./CartItem";

const Cart = ({ state, removeFromCart }) => {
  const inCartItems = state.cameras.filter(camera => camera.inCart);
  const subtotal = inCartItems.reduce((a, b) => {
    return a + b.price;
  }, 0);
  const tax = (subtotal * 0.086).toFixed(2);
  const total = subtotal + tax;
  return (
    <div>
      <h4>Your Cart</h4>
      {inCartItems.map(item => (
        <CartItem key={item.id} removeFromCart={removeFromCart} item={item} />
      ))}
      <p>Subtotal: ${subtotal}</p>
      <p>Tax: ${tax}</p>
      <h4>Total: ${total}</h4>
      <button>CHECKOUT</button>
    </div>
  );
};

export default Cart;
