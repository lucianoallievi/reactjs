import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/NavBar/Navbar";
import { NavBarProductos } from "./components/NavBarProductos/NavbarProductos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Bienvenidos } from "./components/Bienvenidos/Bienvenidos";
import { Contacto } from "./components/Contacto/Contacto";
import { Carrito } from "./components/Carrito/Carrito";
import { Error404 } from "./components/Error404/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import { Button } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <button className="btn btn-secondary">boton</button> */}
        {/* <Button variant="secondary">Click me</Button> */}
        <Route
          path="/"
          element={
            <Bienvenidos saludo="Bienvenidos a nuestra tienda de Ecommerce" />
          }
        />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route
          path="/productos"
          element={[<NavBarProductos />, <ItemListContainer />]}
        />
        <Route
          path="/productos/:categoryId"
          element={[<NavBarProductos />, <ItemListContainer />]}
        />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
