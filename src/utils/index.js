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
const URL_SHARED = "/s6-pressupostos/pressupost-compartit?";
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

const createSharedUrl = (payload, inHost = false) => {
  const objUrl = createObjdUrl(payload);
  const keys = [...Object.keys(objUrl)];

  const stringKeys = keys.reduce(
    (acc, str) => (acc += `&${str}=${objUrl[str]}`),
    ""
  );
  const host = inHost && location.host;
  const deleteFirstLeter = stringKeys.slice(1, stringKeys.length + 1);
  let url;
  if (inHost) {
    url = host.concat(URL_SHARED.concat(deleteFirstLeter));
  } else {
    url = URL_SHARED.concat(deleteFirstLeter);
  }
  return url;
};

const createObjdUrl = (payload) => {
  const objUrl = payload.products.reduce((acc, prod) => {
    if (prod.type === 101) {
      acc = {
        ...acc,
        web: true,
        pages: prod.pages,
        languages: prod.languages,
      };
    }

    if (prod.type === 102) {
      acc = { ...acc, ads: true };
    }
    if (prod.type === 103) {
      acc = { ...acc, seo: true };
    }
    return {
      ...acc,
      discount: payload.checkedDiscount,
    };
  }, {});
  return objUrl;
};
export {
  titleWeb,
  priceAddOptWebType,
  discount,
  infoModal,
  user,
  urlShared,
  URL_SHARED,
  calculateDiscount,
  calculateTotalBudget,
  getBudgetsToLocalStorage,
  addBudgetToLocalStorage,
  removeBudgetsToLocalStorage,
  removeBudgetToLocalStorage,
  updateProductTypeWeb,
  createSharedUrl,
};
