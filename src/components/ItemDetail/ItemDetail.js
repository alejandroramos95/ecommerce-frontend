import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ item }) => {
  const [stock, setStock] = useState(item.stock);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (count) => {
    addItem(
      { id: item.id, price: item.price, title: item.title, image: item.image },
      count
    );
  };

  return (
    <div className="container detailsStyle">
      <h1 className="text-center titleStyle">{item.title}</h1>
      <div className="row">
        <div className="col">
          <img
            src={item.image}
            className="rounded mx-auto d-block img_med"
            alt={item.title}
          />
        </div>
        <div className="col">
          <h3>DESCRIPCION:</h3>
          <p>{item.description}</p>
          <br />
          <h3>PRECIO: ${item.price}</h3>
          <hr />
          <br />
          <h3>STOCK: {item.stock}</h3>
          <br />
          <br />
          <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
          <br />
          <button className="btn btn_item_count">
            <Link to="/cart">Ir al carrito</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
