import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, cant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((prevItem) => prevItem.id === item.id);
      if (existingItem) {
        const updatedCart = prevCart.map((prevItem) =>
          prevItem.id === item.id
            ? { ...prevItem, cant: prevItem.cant + cant }
            : prevItem
        );
        return updatedCart;
      } else {
        return [...prevCart, { ...item, cant }];
      }
    });
  };
  useEffect(() => {}, [cart]);

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
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
