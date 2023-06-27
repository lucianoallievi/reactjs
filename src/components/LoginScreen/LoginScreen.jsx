import "./LoginScreen.scss";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LogingScreen = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    login(values);
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <input
            value={values.email}
            type="email"
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
            Login
          </button>
          <Link to="/registrer">Registrarme</Link>
        </form>
        <button onClick={loginWithGoogle} className="btn btn-primary">
          Google Login
        </button>
      </div>
    </div>
  );
};
export default LogingScreen;
