// ModalProducto.js
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import Carrusel from './Carrusel'; // La ruta a tu nuevo componente

const ModalProducto = ({ isOpen, toggle, product }) => {
  if (!product) {
    return null; 
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>{product.nombre}</ModalHeader>
      <ModalBody>
        {/* Aquí llamas a <Carrusel> y le pasas el producto completo */}
        <div className="mb-3">
          <Carrusel product={product} /> 
        </div>
        
        <p>{product.descripcion}</p>
        <p><strong>Precio: </strong>Bs{product.precio}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cerrar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalProducto;