import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    // pedirDatos()
    //   .then((data) => setItem(data.find((el) => el.id === Number(itemId))))
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false));

    const docRef = doc(db, "productos", itemId);

    getDoc(docRef)
      .then((doc) => {
        const _item = { ...doc.data(), item: doc.id };
        setItem(_item);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container my-5">
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <ItemDetail item={item} key={item.id} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
