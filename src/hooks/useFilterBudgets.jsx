import { useState } from "react";
import { getBudgetsToLocalStorage } from "../utils";

export const useFilterBudgets = () => {
  const [filterBudgets, setFilterBudgets] = useState(
    getBudgetsToLocalStorage()
  );

  return { filterBudgets, setFilterBudgets };
};
