const titleWeb = "WEBS THREE B";
const priceAddOptWebType = 30;
const discount = 20;

const user = {
  phone: 0,
  email: "",
};
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
const urlShared = {
  web: false,
  seo: false,
  ads: false,
  pages: 0,
  languages: 0,
  discount: false,
};
const calculateTotalBudget = (payload, priceAddOptWebType) => {
  const total = payload.reduce((acc, prod) => {
    if (prod.type === 101) {
      const pricePages = prod.pages * priceAddOptWebType;
      const priceLanguages = prod.languages * priceAddOptWebType;
      prod.price = prod.price + pricePages + priceLanguages;
    }
    return acc + prod.price;
  }, 0);

  return total;
};
const calculateDiscount = (total, discount) => {
  let totalDiscount = ((discount / 100) * total * 100) / 100;
  return totalDiscount;
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
const updateProductTypeWeb = (products, options) =>
  products.map((rec) => {
    if (rec.type === 101) {
      rec = {
        ...rec,
        ...options,
      };
    }

    return rec;
  });
export {
  titleWeb,
  priceAddOptWebType,
  discount,
  infoModal,
  user,
  urlShared,
  calculateDiscount,
  calculateTotalBudget,
  getBudgetsToLocalStorage,
  addBudgetToLocalStorage,
  removeBudgetsToLocalStorage,
  removeBudgetToLocalStorage,
  updateProductTypeWeb,
};
