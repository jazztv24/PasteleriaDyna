// src/App.jsx
import ListaProductos from "./components/ListaProductos";
import './app.css';
function App() {
  return (
    <div className="body">
      <div className="logo">
        <img src="/image.png" alt="" />
      </div>
      <h1 className="titulo">Lista de Productos XDDD</h1>
      <ListaProductos />
    </div>
  );
}

export default App;
