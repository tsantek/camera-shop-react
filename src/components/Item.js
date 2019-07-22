import React from "react";
import ReactStars from "react-stars";

const Item = props => {
  const { camera, addToCart } = props;
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

      {camera.onSale && (
        <div className="camera-on-sale">
          <h4 style={{ color: "red" }}>On SALE!</h4>
        </div>
      )}

      <div className="camera-price">
        <h4 style={{ marginBottom: "5px" }}>Rating:</h4>
        <span style={{ paddingBottom: "40px" }}>
          <ReactStars
            count={camera.rating}
            size={24}
            color2={"#ffd700"}
            edit={false}
          />
        </span>
      </div>

      <button className="btn-add-to-cart" onClick={() => addToCart(camera.id)}>
        {!camera.inCart ? "ADD TO CART" : "IN CART"}
      </button>
    </div>
  );
};

export default Item;
