// import logo from "../../assets/cart.png";
import "./CarWidget.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { getCartQuantityTotal } = useContext(CartContext);

  return (
    <Link to="/carrito" className="cart-widget">
      {/* {" "} */}
      {/* <img src={logo} alt="" /> */}
      {/* <FaShoppingCart size="40" color="f4d35e" /> */}
      <FaShoppingCart />
      <span>{getCartQuantityTotal()}</span>
    </Link>
  );
};

export default CartWidget;
