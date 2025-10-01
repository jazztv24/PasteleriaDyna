// Carrusel.js (Usando react-bootstrap)
import React from 'react';
// Por ejemplo, en tu archivo index.js o main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

// Importante: Asumimos que product tiene propiedades llamadas: img1, img2, img3, etc.
const Carrusel = ({ product }) => {

  // 1. Crear un array de URLs extrayendo las propiedades imgN
  const getImages = (product) => {
    const images = [];
    let i = 1;
    let imgKey = `img${i}`;

    // Itera mientras el producto tenga una propiedad 'imgN' con un valor.
    while (product[imgKey]) {
      images.push(product[imgKey]);
      i++;
      imgKey = `img${i}`;
    }
    return images;
  };

  const images = getImages(product);

  if (images.length === 0) {
    return <p className="text-center">No hay imágenes disponibles para este producto.</p>;
  }

  return (
    <Carousel indicators={images.length > 1} controls={images.length > 1}>
      {images.map((url, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={url}
            alt={`Imagen ${index + 1} de ${product.nombre || 'Producto'}`}
            // Estilos sugeridos para mantener la proporción y el tamaño
            style={{ maxHeight: '40vh', objectFit: 'contain', backgroundColor: '#f8f8f8' }} 
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrusel;