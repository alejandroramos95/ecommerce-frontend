import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((prevItem) => prevItem.id === item.id);
      if (existingItem) {
        const updatedCart = prevCart.map((prevItem) => {
          const total = prevItem.cant + cant;
          if (prevItem.id === item.id && item.stock < total) {
            alert("No hay stock suficiente.");
            return prevItem;
          }
          if (prevItem.id === item.id) {
            return { ...prevItem, cant: total };
          } else {
            return prevItem;
          }
        });
        return updatedCart;
      } else {
        return [...prevCart, { ...item, cant }];
      }
    });
  };
  useEffect(() => {}, [cart]);

  const removeItem = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((prevItem) => prevItem.id === item.id);
      if (existingItem) {
        const updatedCart = prevCart.map((prevItem) => {
          const total = prevItem.cant - 1;
          if (prevItem.id === item.id && total <= 0) {
            console.log("1");
            return prevCart.filter((i) => i.id !== item.id);
          }
          if (prevItem.id === item.id) {
            console.log("2");
            return { ...prevItem, cant: total };
          } else {
            console.log("3", prevItem);
            return prevCart;
          }
        });
        console.log("4update", updatedCart);
        return updatedCart;
      }
    });
  };

  const getQuantity = () => {
    return cart.reduce((acum, unItem) => acum + unItem.cant, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, removeItem, addItem, getQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
