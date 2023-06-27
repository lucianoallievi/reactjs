import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";
const schema = Yup.object().shape({
  nombre: Yup.string()
    .required("Debe ingresar su nombre")
    .min(6, "Debe ingresar su nombre completo")
    .max(25, "El nombre es demasiado largo"),
  direccion: Yup.string()
    .required("Debe ingresar una dirección")
    .min(6, "Debe ingresar la dirección completa")
    .max(100, "Supera el máximo permitido"),
  telefono: Yup.string()
    .min(6, "Teléfono no válido")
    .max(25, "Supera el máximo permitido"),
});

const Checkout = () => {
  const { cart, emptyCart, getCartPriceTotal } = useContext(CartContext);

  const { user } = useContext(AuthContext);

  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // setValues({
    //   nombre: e.nombre,
    //   direccion: e.direccion,
    //   telefono: e.telefono,
    // });

    console.log(values);

    const order = {
      client: { ...values, email: user.email },
      items: cart,
      total: getCartPriceTotal(),
      fyhpedido: new Date(),
    };
    console.log(order);
    const ordersRef = collection(db, "orders");

    addDoc(ordersRef, order)
      .then((doc) => {
        console.log(doc.id);
        setOrderId(doc.id);
        emptyCart();
      })
      .catch((e) => console.log(e));

    console.log(order);

    setValues({ ...e, [e.target.name]: e.target.value });
    // console.log(values);
  };

  if (orderId) {
    return (
      <div className="container my-5">
        <h2>Su compra se ha registrado exitosamente</h2>
        <hr />
        <p>
          Código de orden: <span>{orderId}</span>
        </p>
        <Link to="/">
          <p>Volver</p>
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
      <h2>Finalice su compra</h2>
      <hr />
      <Formik
        initialValues={{
          nombre: "",
          direccion: "",
          telefono: "",
        }}
        validationSchema={schema}
      >
        {() => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="nombre"
              type="text"
              className="form-control my-2"
              placeholder="Nombre"
            />
            <ErrorMessage name="nombre" component={"p"} />{" "}
            <Field
              name="direccion"
              type="text"
              className="form-control my-2"
              placeholder="Dirección"
            />
            <ErrorMessage name="direccion" component={"p"} />{" "}
            <Field
              name="telefono"
              type="text"
              className="form-control my-2"
              placeholder="Teléfono"
            />
            <ErrorMessage name="telefono" component={"p"} />
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Checkout;
