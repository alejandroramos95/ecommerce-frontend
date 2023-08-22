import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export const Checkout = () => {
  const [orderId, setOrderId] = useState();
  const [buyer, setBuyer] = useState({});
  const [emailConfirmation, setEmailConfirmation] = useState();
  const { nombre, apellido, email, telefono } = buyer;

  const { cart, clearCart } = useContext(CartContext);

  const handleEmailConfirmation = (e) => {
    setEmailConfirmation(e.target.value);
  };

  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === emailConfirmation) {
      const total = cart.reduce(
        (acum, unItem) => acum + unItem.price * unItem.cant,
        0
      );
      const dia = new Date();
      const data = { buyer, cart, total, dia };
      generateOrder(data);
      clearCart();
    } else {
      alert("Los emails no coinciden.");
    }
  };

  const generateOrder = async (data) => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "orders");
    const order = await addDoc(queryCollection, data);
    setOrderId(order.id);
  };

  return (
    <>
      <h1>Formulario</h1>
      <hr />
      {!orderId && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={apellido}
            onChange={handleInputChange}
            required
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <input
            type="email"
            name="emailConfirmation"
            placeholder="Repetir email"
            value={emailConfirmation}
            onChange={handleEmailConfirmation}
          />
          <br />
          <br />
          <input
            type="number"
            name="telefono"
            placeholder="Telefono"
            value={telefono}
            onChange={handleInputChange}
          />
          <br />
          <br />
          <input type="submit" value="Confirmar Compra" />
        </form>
      )}
      {orderId && (
        <>
          <h1>Felicitaciones tu compra se realizo con exito</h1>
          <h3>Tu ID de Compra es: {orderId}</h3>
        </>
      )}
    </>
  );
};
