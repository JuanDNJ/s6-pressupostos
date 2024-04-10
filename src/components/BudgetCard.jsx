import { useStore } from "../hooks";

const BudgetCard = ({ budget }) => {
  const { discount } = useStore();
  return (
    <article className="md:min-h-56 grid md:grid-cols-3 bg-stone-200 rounded-md overflow-hidden relative">
      <i
        title="Pagament anual"
        className={`${
          budget.checkedDiscount
            ? "flex items-center justify-center absolute top-3 right-3 font-bold text-sm text-stone-800 border-2 border-stone-500 p-2 bg-yellow-300 rounded-full w-10 h-10 cursor-help"
            : "hidden"
        }`}
      >
        {discount}%
      </i>
      <div className="flex flex-col items-center justify-center p-4 ">
        <strong className="text-xl">{budget.nameBudget}</strong>
        <small className="font-bold">{budget.user.email}</small>
        <small className="text-lg">{budget.user.phone}</small>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <strong className="w-60">Servies contractats:</strong>
        <ul className="w-60 list-disc list-inside flexflex-col items-stajustify-center font-bold text-sm">
          {budget.products.map((prod) => (
            <li key={prod.id} className="flex gap-2 items-center">
              <strong>{prod.name}</strong>
              {prod.type === 101 && (
                <span>
                  ({prod.pages} pàginas , {prod.languages} llenguatges)
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex md:flex-col items-center justify-center gap-2 py-4 px-2">
        <strong className="text-xl font-extrabold text-stone-500">
          Total:
        </strong>
        <strong className="text-3xl font-extrabold">
          {budget.totalPrice} <small className="text-blue-500">€</small>
        </strong>
      </div>
    </article>
  );
};
export default BudgetCard;
