import { createContext, useState } from "react";
import listProducts from "../data/products.json";
import { useProducts } from "../hooks/useProducts";
import { useCounter } from "../hooks/useCounter";
export const Ctx = createContext();

const Store = ({ children }) => {
  const [services] = useState(listProducts);
  const {
    countPages,
    countLanguages,
    handlerPage,
    handlerLanguage,
    resetCount,
  } = useCounter();
  const {
    products,
    addProduct,
    removeProduct,
    updateProductTypeWeb,
    removeProducts,
  } = useProducts();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [budget, setbudget] = useState({});
  const [budgets, setBudgets] = useState([]);

  const value = {
    titleWeb: "WEBS THREE B",
    priceAddOptWebType: 30,

    services,
    user,
    products,
    budget,
    budgets,
    countPages,
    countLanguages,
    handlerPage,
    handlerLanguage,
    resetCount,
    addProduct,
    removeProduct,
    updateProductTypeWeb,
    removeProducts,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export default Store;
