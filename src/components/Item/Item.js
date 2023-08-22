import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Item({ title, image, price, id }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        height={"100%"}
        width={"100%"}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <p>Precio: ${price}</p>
        </Card.Text>
        <Link to={`/item/${id}`} className="btn btn_ver_mas">
          Ver más
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
