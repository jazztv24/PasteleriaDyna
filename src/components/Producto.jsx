import './cards.css';
const Producto = ({ product }) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={product.img} className="card-img-top" alt={product.nombre} />
      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">{product.descripcion}</p>
        <p className="card-text">
          <strong>Precio: </strong>Bs{product.precio}
        </p>
      </div>
    </div>
  );
};

export default Producto;

