import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo="holis!!" />
    </div>
  );
}

export default App;
