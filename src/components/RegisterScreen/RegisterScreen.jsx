import "./RegisterScreen.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const RegisterScreen = () => {
  const { register } = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(values);
  };

  return (
    <div className="register">
      <div className="register-container">
        <h2>Registrarme</h2>
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <input
            value={values.email}
            type="text"
            className="form-control my-2"
            placeholder="email"
            name="email"
            onChange={handleInput}
          />
          <input
            value={values.password}
            type="password"
            className="form-control my-2"
            placeholder="password"
            name="password"
            onChange={handleInput}
          />
          <button className="btn btn-primary" type="submit">
            Registrarme
          </button>
          <Link to="/login">Ya estoy registrado</Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
