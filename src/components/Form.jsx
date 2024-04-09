import { useStore } from "../hooks";
import { getBudgetsToLocalStorage } from "../utils";

// TODO: Falta validar los campos del formulario

const Form = ({ children, name }) => {
  const {
    addBudget,
    resetCheckBox,
    user,
    products,
    countLanguages,
    countPages,
    date,
    priceAddOptWebType,
    setFilterBudgets,
  } = useStore();

  const handlerSubmit = (eve) => {
    const elements = [...eve.target];
    const newUser = structuredClone(user);
    let nameBudget = "";
    elements.forEach((element) => {
      if (
        element.type !== "checkbox" &&
        element.type !== "reset" &&
        element.type !== "submit"
      ) {
        if (element.name === "nameBudget") {
          nameBudget = element.value;
        }
        if (element.name === "phone") {
          newUser.phone = element.value;
        }
        if (element.name === "email") {
          newUser.email = element.value;
        }
      }
    });

    addBudget({
      user: newUser,
      nameBudget,
      products: products.map((rec) => {
        if (rec.type === 101) {
          rec = {
            ...rec,
            pages: countPages,
            languages: countLanguages,
          };
        }

        return rec;
      }),
      date,
      totalPrice:
        products.reduce((acc, prod) => acc + prod.price, 0) +
        (countLanguages + countPages) * priceAddOptWebType,
    });
  };

  const handlerReset = (eve) => {
    const elements = [...eve.target];

    elements.forEach((element) => {
      if (element.type === "checkbox") {
        element.checked = false;
      }
    });
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
