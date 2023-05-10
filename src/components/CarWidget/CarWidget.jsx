import logo from "../../assets/cart.png";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="/carrito">
        {" "}
        <img src={logo} alt="" />
      </Link>
      <span>0</span>
    </div>
  );
};

export default CartWidget;
