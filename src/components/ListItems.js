import React from "react";
import Item from "./Item";

const ListItems = props => {
  return (
    <div className="container-list">
      {props.cameras.length === 0 && "Your camera ain't here, kid."}
      {props.cameras.map(camera => {
        return (
          <Item key={camera.id} camera={camera} addToCart={props.addToCart} />
        );
      })}
    </div>
  );
};

export default ListItems;
