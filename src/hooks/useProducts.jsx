import { useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  // State Products
  const isExistProduct = (id) => products.some((rec) => rec.id === id);

  const addProduct = (product) => {
    if (!isExistProduct(product.id)) {
      setProducts((prev) => [...prev, product]);
    }
  };
  const removeProduct = (product) => {
    if (isExistProduct(product.id)) {
      setProducts((prev) => prev.filter((rec) => rec.id !== product.id));
    }
  };
  const updateProductTypeWeb = (id, options) => {
    setProducts((prev) =>
      prev.map((rec) => {
        if (rec.id === id && rec.type === 101) {
          return {
            ...rec,
            ...options,
          };
        }
        return rec;
      })
    );
  };
  const removeProducts = () => {
    setProducts([]);
  };
  return {
    products,
    addProduct,
    removeProduct,
    updateProductTypeWeb,
    removeProducts,
  };
};
