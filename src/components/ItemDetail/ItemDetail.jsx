import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);
  const [talle, setTalle] = useState(null);

  const handleAgregar = () => {};

  return (
    <div>
      <h3>{item.nombre}</h3>
      <img src={item.img} alt={item.nombre} />
      <p>{item.descripcion}</p>
      <p>Categoria {item.category}</p>
      <p>
        <strong>Precio: ${item.precio}</strong>
      </p>

      <ItemCount
        cantidad={cantidad}
        setCantidad={setCantidad}
        stock={item.stock}
        agregar={handleAgregar}
      />
    </div>
  );
};

export default ItemDetail;
