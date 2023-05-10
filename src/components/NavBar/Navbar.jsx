import "./NavBar.scss";
import CartWidget from "../CarWidget/CarWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <h1 className="logo">Mercatus</h1>
        </Link>
        <nav className="navbar">
          <Link to="/productos">
            <p className="navbar__link">productos</p>
          </Link>
          <Link to="/nosotros">
            <p className="navbar__link">nosotros</p>
          </Link>
          <Link to="/contacto">
            <p className="navbar__link">contacto</p>
          </Link>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};
