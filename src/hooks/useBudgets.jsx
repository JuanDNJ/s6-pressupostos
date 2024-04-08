import { useState } from "react";
import { getBudgetsToLocalStorage } from "../utils";
export const useBudgets = () => {
  const [budgets, setBudgets] = useState(getBudgetsToLocalStorage());
  const addBudget = (budget) => {
    localStorage.setItem("budgets", JSON.stringify([...budgets, budget]));
    setBudgets(() => JSON.parse(localStorage.getItem("budgets")));
  };

  return { budgets, addBudget };
};
