import { useStore } from "../hooks";

import {
  user,
  calculateTotalBudget,
  getBudgetsToLocalStorage,
  updateProductTypeWeb,
  calculateDiscount,
} from "../utils";

const Form = ({ children, name }) => {
  const {
    addBudget,
    resetCheckBox,
    products,
    countLanguages,
    countPages,
    date,
    priceAddOptWebType,
    setFilterBudgets,
    checkedDiscount,
    discount,
    budgets,
    resetCount,
    removeProducts,
  } = useStore();

  const checkedOff = (elements) => {
    elements.forEach((element) => {
      if (element.type === "checkbox") {
        element.checked = false;
      }
    });
  };
  const handlerSubmit = (eve) => {
    eve.preventDefault();
    const newProducts = updateProductTypeWeb(products, {
      pages: countPages,
      languages: countLanguages,
    });
    let nameBudget = "";
    let totalPrice = calculateTotalBudget(newProducts, priceAddOptWebType);
    const elements = [...eve.target];

    if (checkedDiscount) {
      totalPrice -= calculateDiscount(totalPrice, discount);
    }

    elements.forEach((element) => {
      if (
        element.type !== "checkbox" &&
        element.type !== "reset" &&
        element.type !== "submit"
      ) {
        if (element.name === "nameBudget") {
          nameBudget = element.value.trim();
        }
        if (element.name === "phone") {
          user.phone = element.value;
        }
        if (element.name === "email") {
          user.email = element.value.trim();
        }
      }
    });

    addBudget({
      id: budgets.length + 1,
      user,
      nameBudget,
      products: newProducts,
      date,
      checkedDiscount,
      totalPrice,
    });
    setFilterBudgets(() => getBudgetsToLocalStorage());
    checkedOff(elements);
    resetCount();
    removeProducts();
  };

  const handlerReset = (eve) => {
    const elements = [...eve.target];
    checkedOff(elements);
    setFilterBudgets(() => getBudgetsToLocalStorage());
    resetCheckBox();
  };

  return (
    <form
      id={name}
      name={name}
      onSubmit={handlerSubmit}
      onReset={handlerReset}
      className="flex flex-col gap-4 p-4 text-stone-600"
    >
      {children}
    </form>
  );
};
export default Form;
