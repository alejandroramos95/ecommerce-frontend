import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
        greeting={"Hola, soy el componente ItemListContainer!"}
      />
    </div>
  );
}

export default App;
