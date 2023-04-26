import logo from "../../assets/cart.png";

const CartWidget = () => {
  return (
    <div>
      <a href="">
        {" "}
        <img src={logo} alt="" />
      </a>
      <span>0</span>
    </div>
  );
};

export default CartWidget;
