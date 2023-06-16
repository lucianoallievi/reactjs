import { useState } from "react";

export const Contacto = () => {
  const [values, setValues] = useState({
    nombre: "",
    email: "",
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
    alert("Su mensaje ha sido recibido.");
  };

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
          placeholder="nombre"
          name="nombre"
        />
        <input
          value={values.email}
          onChange={handleInputChange}
          type="email"
          className="form-control my-2"
          name="email"
          placeholder="email"
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
