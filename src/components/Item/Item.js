import React from "react";
import { Link } from "react-router-dom";

const Item = ({ title, image, price, id, stock }) => {
  return (
    <div className="col">
      <div className="card cardStyle">
        <img src={image} alt={title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>Precio: {price}</p>
          <Link to={`/item/${id}`} className="btn btn_ver_mas">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
