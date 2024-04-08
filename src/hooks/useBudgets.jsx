import { useState } from "react";

export const useBudgets = () => {
  const [budgets, setBudgets] = useState([]);
  const addBudget = (budget) => {
    setBudgets((prev) => [...prev, budget]);
  };
  return { budgets, addBudget };
};
