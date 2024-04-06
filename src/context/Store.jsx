import { createContext, useState } from "react";
import listProducts from "../data/products.json";
import { useProducts, useCounter, useChecked } from "../hooks";

export const Ctx = createContext();

const Store = ({ children }) => {
  const [services] = useState(listProducts);
  const { checkWeb, handlerInputWeb, resetCheckBox } = useChecked();
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
    nameBudget: "",
    email: "",
    phone: "",
  });
  const addUser = (payload) => {
    setUser(() => payload);
  };

  const [budgets, setBudgets] = useState([]);
  const addBudget = (budget) => {
    setBudgets((prev) => [...prev, budget]);
  };

  const value = {
    titleWeb: "WEBS THREE B",
    date: Date.now(),
    priceAddOptWebType: 30,
    services,
    user,
    products,
    budgets,
    countPages,
    countLanguages,
    handlerPage,
    handlerLanguage,
    checkWeb,
    addBudget,
    resetCheckBox,
    handlerInputWeb,
    resetCount,
    addProduct,
    removeProduct,
    updateProductTypeWeb,
    removeProducts,
    addUser,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export default Store;
