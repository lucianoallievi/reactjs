import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Nosotros } from "../components/Nosotros/Nosotros";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Navbar } from "../components/NavBar/Navbar";
import { NavBarProductos } from "../components/NavBarProductos/NavBarProductos";
import { Bienvenidos } from "../components/Bienvenidos/Bienvenidos";
import { Contacto } from "../components/Contacto/Contacto";
import { Carrito } from "../components/Carrito/Carrito";
import Checkout from "../components/Checkout/Checkout";
import { Error404 } from "../components/Error404/Error404";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import LogingScreen from "../components/LoginScreen/LoginScreen";
import RegisterScreen from "../components/RegisterScreen/RegisterScreen";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// import { Button } from "react-bootstrap";

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <BrowserRouter>
        {console.log("user.logged:" + user.logged)}
        {user.logged ? (
          <>
            <Navbar />
            <Routes>
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
              <Route path="/checkout" element={<Checkout />} />
              {/* <Route path="*" element={<Error404 />} /> */}
              <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>{" "}
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<LogingScreen />}></Route>
            <Route path="/registrer" element={<RegisterScreen />}></Route>
            <Route path="*" element={<Navigate to="/login/" />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
