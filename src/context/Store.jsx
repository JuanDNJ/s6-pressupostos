import { createContext, useState } from "react";
import listProducts from "../data/products.json";
import {
  useProducts,
  useCounter,
  useChecked,
  useModal,
  useBudgets,
} from "../hooks";

export const Ctx = createContext();

const Store = ({ children }) => {
  const [services] = useState(listProducts);
  const [user, setUser] = useState({
    nameBudget: "",
    email: "",
    phone: "",
  });
  const titleWeb = "WEBS THREE B";

  const addUser = (payload) => {
    setUser(() => payload);
  };

  // const [budgets, setBudgets] = useState([]);
  // const addBudget = (budget) => {
  //   setBudgets((prev) => [...prev, budget]);
  // };

  const value = {
    titleWeb,
    date: Date.now(),
    priceAddOptWebType: 30,
    services,
    user,
    ...useBudgets(),
    ...useProducts(),
    ...useModal(),
    ...useCounter(),
    ...useChecked(),
    addUser,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export default Store;
