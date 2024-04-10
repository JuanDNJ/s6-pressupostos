import { createContext, useState } from "react";
import listProducts from "../data/products.json";
import {
  useProducts,
  useCounter,
  useChecked,
  useModal,
  useBudgets,
  useFilterBudgets,
} from "../hooks";
import { discount, priceAddOptWebType, titleWeb } from "../utils";

export const Ctx = createContext();

const Store = ({ children }) => {
  if (!localStorage.getItem("budgets")) {
    localStorage.setItem("budgets", JSON.stringify([]));
  }

  const [services] = useState(listProducts);

  const [user, setUser] = useState({
    email: "",
    phone: "",
  });

  const addUser = (payload) => {
    setUser(() => payload);
  };

  const value = {
    titleWeb,
    date: Date.now(),
    priceAddOptWebType,
    discount,
    services,
    user,
    ...useBudgets(),
    ...useProducts(),
    ...useModal(),
    ...useCounter(),
    ...useChecked(),
    ...useFilterBudgets(),
    addUser,
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export default Store;
