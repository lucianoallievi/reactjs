import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/NavBar/Navbar";
// import { Button } from "react-bootstrap";
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo="Bienvenido a Lopez S.A." />
      {/* <button className="btn btn-secondary">boton</button> */}
      {/* <Button variant="secondary">Click me</Button> */}
    </div>
  );
}

export default App;
