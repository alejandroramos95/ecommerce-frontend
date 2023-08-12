import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const totalAmount = cart.reduce(
    (total, product) => total + product.price * product.cant,
    0
  );

  return (
    <>
      <h1>Carrito</h1>
      <hr />
      {cart.length === 0 ? (
        <h1>No hay productos.</h1>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.name} />
              <p>Cantidad: {item.cant}</p>
              <p>Precio unitario: {item.price}</p>
              <p>Precio: {item.price * item.cant}</p>
              <button onClick={() => removeItem(item.id)}>
                Eliminar Producto
              </button>
              <hr />
              <br />
            </div>
          ))}
          Precio total de la orden: {totalAmount}
        </div>
      )}

      {cart.length === 0 ? undefined : (
        <Link to="/checkout">
          <button>Finalizar Compra</button>
        </Link>
      )}
    </>
  );
};
