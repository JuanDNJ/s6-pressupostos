import { createContext, useState } from "react";
import listProducts from "../data/products.json";
import { useProducts, useCounter, useChecked, useModal } from "../hooks";

export const Ctx = createContext();

const Store = ({ children }) => {
  const [services] = useState(listProducts);
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
    budgets,
    ...useProducts(),
    ...useModal(),
    ...useCounter(),
    ...useChecked(),
    addBudget,
    addUser,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export default Store;
