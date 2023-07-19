import React from "react";
import ItemCount from "../ItemCount/ItemCount.js";

const ItemDetail = ({ item }) => {
  //console.log(item.stock);
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <img src={item.imagen} className="img-fluid" alt={item.nombre} />
        <h2>{item.nombre}</h2>
        <p>{item.descripcion}</p>
        <p> Precio $ {item.precio}</p>
        <p> Cantidad: {item.stock}</p>
      </div>
      <div>
        <ItemCount stockItems={item.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;
