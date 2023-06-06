import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { pesos } from "../../helpers/locale";
import { FaTrashAlt } from "react-icons/fa";

export const Carrito = () => {
  const { cart, isCartEmpty, emptyCart, removeCartItem, getCartPriceTotal } =
    useContext(CartContext);
  console.log("Carrito.jsx:" + cart);
  return (
    <div className="container my-5">
      <h2>Tu compra</h2>
      <hr />

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.nombre}</h3>
          <img src={item.img} alt={item.nommbre} />
          <p>Cantidad: {item.cantidad}</p>
          <p>Subtotal: {pesos(item.cantidad * item.precio)}</p>
          <button
            onClick={() => removeCartItem(item.id)}
            className="btn btn-danger"
          >
            <FaTrashAlt />
          </button>
          {/* <button onClick={removeCartItem(item)} className="btn btn-danger">  
            Remover
          </button> */}
          <hr />
        </div>
      ))}

      {isCartEmpty() ? (
        <div>
          <p>Su carrito de compras está vació.</p>
          <p>
            {" "}
            Acceda a nuestros <Link to="/productos">productos</Link> para
            realizar su compra.
          </p>
        </div>
      ) : (
        <div className="container my-5">
          <h3>Total: {pesos(getCartPriceTotal())}</h3>
          <button onClick={emptyCart} className="btn btn-danger">
            Cancelar compra
          </button>
          <Link to="/checkout">
            <button className="btn btn-success">Finalizar compra</button>
          </Link>
        </div>
      )}
    </div>
  );
};
