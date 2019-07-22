import React from "react";

const Item = props => {
  const { camera } = props;
  return (
    <div className="item-container">
      <div className="camera-name">
        <h2>Camera Name: {camera.name}</h2>
      </div>

      <div className="img-camera">
        <img src={camera.picture} alt={camera.name} />
      </div>

      <div className="camera-price">
        <h4>Price: ${camera.price}</h4>
      </div>

      <div className="camera-price">
        <h4>Rating:</h4>
        <h4>{camera.rating}</h4>
      </div>

      <button className="btn-add-to-cart"> ADD TO CART </button>
    </div>
  );
};

export default Item;
