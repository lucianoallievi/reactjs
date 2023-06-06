import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { pesos } from "../../helpers/locale";

const ItemDetail = ({ item }) => {
  const { addToCart, isInCart } = useContext(CartContext);

  console.log(isInCart(item.id));

  const [cantidad, setCantidad] = useState(1);
  const [talle, setTalle] = useState(null);

  const handleAgregar = () => {
    const newItem = {
      ...item,
      cantidad,
      talle,
    };

    addToCart(newItem);
  };

  return (
    <div>
      <h3>{item.nombre}</h3>
      <img src={item.img} alt={item.nombre} />
      <p>{item.descripcion}</p>
      <p>Categoria {item.category}</p>
      <p>
        <strong>Precio: {pesos(item.precio)}</strong>
      </p>

      {isInCart(item.id) ? (
        <Link to="/checkout">
          <button className="btn btn-success">Terminar mi compra</button>
        </Link>
      ) : (
        <ItemCount
          cantidad={cantidad}
          setCantidad={setCantidad}
          stock={item.stock}
          agregar={handleAgregar}
        />
      )}
    </div>
  );
};

export default ItemDetail;
