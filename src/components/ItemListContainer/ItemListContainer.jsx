import { useEffect } from "react";
import { useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList";
// import { useProductos } from '../../hooks/useProductos'
import { useParams, useSearchParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemListContainer = () => {
  // const { loading, productos } = useProductos()

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    // pedirDatos()
    //   .then((data) => {
    //     if (!categoryId) {
    //       setProductos(data);
    //     } else {
    //       setProductos(data.filter((el) => el.category === categoryId));
    //     }
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false));

    //armo referencia (sync)
    const productosRef = collection(db, "productos");
    const q = categoryId
      ? query(productosRef, where("category", "==", categoryId))
      : productosRef;

    //consumo la ref (sync)
    getDocs(q)
      .then((res) => {
        const docs = res.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        //console.log(docs);
        setProductos(docs);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [categoryId]);

  const listado = search
    ? productos.filter((el) =>
        el.nombre.toLowerCase().includes(search.toLowerCase())
      )
    : productos;

  return (
    <div className="container my-5">
      {loading ? (
        <h2>Cargando</h2>
      ) : (
        <ItemList items={listado} categoryId={categoryId} />
      )}
    </div>
  );
};
