// src/App.jsx
import ListaProductos from "./components/ListaProductos";
import './app.css';
import Footer from "./Footer";

function App() {
  return (
    <div className="body">
      <div className="logo">
        <img src="/image.png" alt="" />
      </div>

      <ListaProductos />
      <Footer/>
    </div>
  );
}

export default App;
