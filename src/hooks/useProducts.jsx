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

  const removeProducts = () => {
    setProducts([]);
  };
  return {
    products,
    addProduct,
    removeProduct,
    removeProducts,
  };
};
