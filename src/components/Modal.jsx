import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ModalProducto = ({ isOpen, toggle, product }) => {
  if (!product) {
    return null; // No renderiza nada si no hay un producto seleccionado
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{product.nombre}</ModalHeader>
      <ModalBody>
        <div className="text-center">
          <img src={product.img} className="img-fluid mb-3" alt={product.nombre} style={{ maxWidth: '100%' }} />
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