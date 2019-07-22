import React from "react";
import Item from "./Item";

const ListItems = props => {
  return (
    <div className="container-list">
      {props.cameras.map(camera => {
        return <Item key={camera.id} camera={camera} />;
      })}
    </div>
  );
};

export default ListItems;
