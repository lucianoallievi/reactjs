import "./NavBarProductos.scss";
import { Link } from "react-router-dom";

export const NavBarProductos = () => {
  return (
    <div className="navbarproductos__container">
      <Link to="/productos/electronica">
        <p className="navbarproductos__link"> electronica </p>
      </Link>
      <Link to="/productos/hogar">
        <p className="navbarproductos__link"> hogar </p>
      </Link>
      <Link to="/productos/ropa">
        <p className="navbarproductos__link"> ropa </p>
      </Link>
      <Link to="/productos/herramientas">
        <p className="navbarproductos__link"> herramientas </p>
      </Link>
      <Link to="/productos/muebles">
        <p className="navbarproductos__link"> muebles </p>
      </Link>
      <Link to="/productos/deportes">
        <p className="navbarproductos__link"> deportes </p>
      </Link>
      <Link to="/productos/instrumentos">
        <p className="navbarproductos__link"> instrumentos </p>
      </Link>
    </div>
  );
};
