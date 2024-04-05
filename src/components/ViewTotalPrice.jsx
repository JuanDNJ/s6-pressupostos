import { useEffect } from "react";
import { useStore } from "../hooks/useStore";

// TODO: Errores: los inputs typo checkboxes del formulario: desactivar el cheked cuando se elimine el presupuesto.

const ViewTotalPrice = () => {
  const {
    products,
    countPages,
    countLanguages,
    resetCount,
    priceAddOptWebType,
    addProduct,
    removeProducts,
  } = useStore();

  const calculateBudget = () => {
    const priceAllProducts = products.reduce(
      (acc, product) => acc + product.price,
      0
    );

    const totalPricePages = countPages * priceAddOptWebType;
    const totalPriceLanguages = countLanguages * priceAddOptWebType;
    const total = priceAllProducts + totalPricePages + totalPriceLanguages;
    return total;
  };
  const removebudget = () => {
    resetCount();
    removeProducts();
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => calculateBudget, [addProduct, countPages, countLanguages]);
  return (
    <aside className="flex items-center justify-end gap-2 p-4">
      <strong className="text-stone-400">Preu pressuposat:</strong>
      <strong className="text-xl font-extrabold text-white">
        {calculateBudget()} <small className="text-red-500">€</small>
      </strong>
      <button
        type="button"
        onClick={removebudget}
        className="border p-2 rounded-md text-sm font-bold text-stone-200"
      >
        Thras
      </button>
    </aside>
  );
};

export default ViewTotalPrice;
