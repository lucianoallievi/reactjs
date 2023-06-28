import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export const Contacto = () => {
  const { user } = useContext(AuthContext);

  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const [values, setValues] = useState({
    nombre: "",
    email: user.email,
    mensaje: "",
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // const handleNombre = (e) => {
  //   setValues(e.target.value);
  // };
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handleMensaje = (e) => {
  //   setMensaje(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const now = new Date();
    // const formData = new FormData({ values });
    // formData.append("date", now);

    // console.log(formData);

    const messageRef = collection(db, "messages");

    addDoc(messageRef, values)
      .then((doc) => {
        console.log(doc.id);
      })
      .catch((e) => console.log(e));
    alert("Su mensaje ha sido recibido. Muchas gracias");
    setMensajeEnviado(true);
  };

  if (mensajeEnviado) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container my-5">
      <h2>Contáctenos</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          value={values.nombre}
          onChange={handleInputChange}
          className="form-control my-2"
          type="text"
          placeholder="Ingrese su nombre"
          name="nombre"
        />
        <input
          value={values.email}
          onChange={handleInputChange}
          type="email"
          className="form-control my-2"
          name="email"
          placeholder={user.email}
          readOnly="true"
        />
        <input
          value={values.mensaje}
          onChange={handleInputChange}
          className="form-control my-2"
          placeholder="mensaje"
          type="text"
          name="mensaje"
        />
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};
