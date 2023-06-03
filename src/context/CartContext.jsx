import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log("Carrito: " + cart);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const isCartEmpty = () => {
    return cart.length === 0;
  };

  //   const removeCartItem = (item) => {
  //     const newCart = [];
  //     cart.map((cartItem) => {
  //       newCart.push(cartItem.id !== item.id);
  //     });
  //     setCart(newCart);
  //   };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        emptyCart,
        isCartEmpty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
