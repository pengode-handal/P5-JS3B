"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import type { Product } from "@prisma/client";

const DeleteBisnis = ({ product }: { product: Product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async (productId: number) => {
    setIsLoading(true);
    await axios.delete(`/api/dashboard/product/${productId}`);
    setIsLoading(false);
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleModal}>
        Delete
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are sure to delete {product.coName}?
          </h3>

          <div className="modal-action">
            <button type="button" className="btn" onClick={handleModal}>
              No
            </button>
            {!isLoading ? (
              <button
                type="button"
                onClick={() => handleDelete(product.id)}
                className="btn btn-primary"
              >
                Yes
              </button>
            ) : (
              <button type="button" className="btn loading">
                Deleting...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBisnis;