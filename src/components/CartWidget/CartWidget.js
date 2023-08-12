import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);
  return (
    <>
      <Link to="/cart">
        <i class="bi bi-cart"></i>
        <button style={{ backgroundColor: "#e4c360", border: "none" }}>
          {getQuantity()}
        </button>
      </Link>
    </>
  );
};

export default CartWidget;
