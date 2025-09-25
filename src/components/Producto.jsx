import './cards.css';

const Producto = ({ product, openModal }) => {
  return (
    <div className="card m-3">
      <div className="imagen">
        <img src={product.img} className="card-img-top" alt={product.nombre} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.nombre}</h5>
        <p className="card-text">{product.descripcion}</p>
        <p className="card-text">
          <strong>Precio: </strong>Bs{product.precio}
        </p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => openModal(product)} // Llama a la función del padre y le pasa el producto
        >
          Ver detalles
        </button>
      </div>
    </div>
  );
};

export default Producto;