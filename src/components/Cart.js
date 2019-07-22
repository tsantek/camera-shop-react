import React from "react";
import CartItem from "./CartItem";

const Cart = ({ state, removeFromCart }) => {
  const inCartItems = state.cameras.filter(camera => camera.inCart);
  const subtotal = inCartItems.reduce((a, b) => {
    return a + b.price;
  }, 0);
  const tax = (subtotal * 0.086).toFixed(2);
  const total = subtotal + parseInt(tax);
  return (
    <div className="cart-container">
      <h3>Your Cart</h3>
      {inCartItems.map(item => (
        <CartItem key={item.id} removeFromCart={removeFromCart} item={item} />
      ))}
      <p>Subtotal: ${subtotal}</p>
      <p>Tax: ${tax}</p>
      <h4>
        <bold>Total: ${total.toFixed(2)}</bold>
      </h4>
      <div style={{ textAlign: "center" }}>
        <button className="btn-checkout">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
