'use client'

import React, { useState } from 'react'
import ProductModal from '../ModalList/page';


const ButtonModal = (product: any) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const openModal = (product: any) => {
        setSelectedProduct(product);
      };
    
      const closeModal = () => {
        setSelectedProduct(null);
      };
  return (
    <>
    <button
    className="btn btn-primary"
    onClick={() => openModal(product)} // Open the modal
    >
    Details
    </button>
    <ProductModal product={selectedProduct} onClose={closeModal} />
    </>
  )
}

export default ButtonModal

