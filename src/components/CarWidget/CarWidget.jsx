import logo from "../../assets/cart.png";
import { Link } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
const CartWidget = () => {
  return (
    <div>
      <Link to="/carrito">
        {" "}
        {/* <img src={logo} alt="" /> */}
        <BsCartCheck size="40" color="f4d35e" />
      </Link>
      <span>0</span>
    </div>
  );
};

export default CartWidget;
