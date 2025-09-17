import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import Producto from "./Producto";

const ListaProductos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ListaPrincipal"));

        console.log("Docs en Firestore:");
        querySnapshot.docs.forEach(doc => {
          console.log(doc.id, "=>", doc.data());
        });

        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-2">Cargando productos, espere por favor...</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-wrap CartasSeccion1">
      {products.map((product) => (
        <Producto key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListaProductos;
