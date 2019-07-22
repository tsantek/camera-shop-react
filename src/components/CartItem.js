import React from "react";

const CartItem = props => {
  const { removeFromCart, item } = props;
  return (
    <div className="cart-item-container">
      <div className="name-price-item">
        <p>{item.name}</p>
      </div>
      <div className="remove-btn">
        <i
          style={{ fontSize: "25px", paddingTop: "10px" }}
          className="fa fa-trash-o"
          onClick={() => removeFromCart(item.id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
