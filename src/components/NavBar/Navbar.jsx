import "./NavBar.scss";
import CartWidget from "../CarWidget/CarWidget";
export const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="logo">LOPEZ S.A.</h1>
        <nav className="navbar">
          <a href="">
            <p className="navbar__link">productos</p>
          </a>
          <a href="">
            <p className="navbar__link">nosotros</p>
          </a>
          <a href="">
            <p className="navbar__link">contacto</p>
          </a>
        </nav>
        <CartWidget />
      </div>
    </header>
  );
};
