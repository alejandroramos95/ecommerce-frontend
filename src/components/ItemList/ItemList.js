import React from "react";
import Item from "../Item/Item";

const ItemList = ({ data }) => {
  return (
    <div className="container">
      <div className="row justify-content-evenly">
        {data.map((i) => (
          <Item
            item={i}
            title={i.title}
            key={i.id}
            id={i.id}
            image={i.image}
            price={i.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
