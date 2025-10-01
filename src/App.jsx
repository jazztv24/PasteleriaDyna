// src/App.jsx
import ListaProductos from "./components/ListaProductos";
import './app.css';
import Footer from "./Footer";

function App() {
  return (
    <div className="body">
      <div className="logo">
        <img src="/LogoDynasCake.png" alt="" />
        <img src="/Endulza.png" className="endulza" alt="" />
      </div>

      <ListaProductos />
      <Footer/>
    </div>
  );
}

export default App;
