const infoModal = {
  languages: {
    title: "Número de llenguatges",
    description:
      "Afegeix les llenguatges que tindra el teu projecte. El cost de cada llenguatge es de 30€.",
  },

  pages: {
    title: "Número de pàginas",
    description:
      "Afegeix les págines que necesitis per a dur a terme el teu projecte. El cost de cada pàgina es de 30€.",
  },
};

const getBudgetsToLocalStorage = () =>
  JSON.parse(localStorage.getItem("budgets"));

const addBudgetToLocalStorage = (budget) => {
  localStorage.setItem(
    "budget",
    JSON.stringify([...getBudgetsToLocalStorage(), budget])
  );
};
const removeBudgetsToLocalStorage = () => {
  localStorage.removeItem("budgets");
};
const removeBudgetToLocalStorage = (payload) => {
  const budgets = getBudgetsToLocalStorage();
  const newBudgets = budgets.filter(
    (budget) => budget.nameBudget !== payload.name
  );
  localStorage.setItem("budget", JSON.stringify(newBudgets));
};

export {
  infoModal,
  getBudgetsToLocalStorage,
  addBudgetToLocalStorage,
  removeBudgetsToLocalStorage,
  removeBudgetToLocalStorage,
};
