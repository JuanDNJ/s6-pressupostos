import { useState } from "react";
import { getBudgetsToLocalStorage } from "../utils";

export const useFilterBudgets = () => {
  const [filterBudgets, setFilterBudgets] = useState(
    getBudgetsToLocalStorage()
  );
  const [checkImport, setCheckImport] = useState();
  const [checkDate, setCheckDate] = useState();
  const [checkNomBudget, setCheckNomBudget] = useState();
  return {
    filterBudgets,
    setFilterBudgets,
    checkImport,
    setCheckImport,
    checkDate,
    setCheckDate,
    checkNomBudget,
    setCheckNomBudget,
  };
};
