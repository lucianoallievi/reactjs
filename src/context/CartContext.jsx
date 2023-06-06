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

  const getCartQuantityTotal = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  };

  const getCartPriceTotal = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
  };

  const removeCartItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //  const modifyCartItemQuantity = (id) => {
  //    const _cart = cart.slice();
  //    const item = _cart.find( (item) => item.id === id )
  //      newCart.push(cartItem.id !== item.id);
  //    });
  //    setCart(newCart);
  //  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        emptyCart,
        isCartEmpty,
        removeCartItem,
        getCartQuantityTotal,
        getCartPriceTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
