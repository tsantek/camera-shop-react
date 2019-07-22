import React from "react";

const CartItem = props => {
  const { removeFromCart, item } = props;
  return (
    <div className="cart-item-container">
      <div className="name-price-item">
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
      <div className="remove-btn">
        <button onClick={() => removeFromCart(item.id)}>REMOVE</button>
      </div>
    </div>
  );
};

export default CartItem;
