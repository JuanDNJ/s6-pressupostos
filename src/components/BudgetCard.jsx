import ProductCard from "./ProductCard";
import Budget from "./Budget";
import ViewBudgetAmount from "./ViewBudgetAmount";
import BudgetHeader from "./BudgetHeader";
import ViewDiscount from "./ViewDiscount";
import { createSharedUrl } from "../utils";
import CopyToClipboardBtn from "./CopyToClipboardBtn";

const BudgetCard = ({ budget }) => {
  return (
    <Budget>
      <BudgetHeader>
        <CopyToClipboardBtn url={createSharedUrl(budget, true)} />
        <ViewDiscount checkView={budget.checkedDiscount} />
      </BudgetHeader>

      {budget.nameBudget && (
        <div className="flex flex-col items-center justify-center p-4 ">
          <strong className="text-xl text-center">{budget.nameBudget}</strong>
          <small className="font-bold text-left">{budget.user.email}</small>
          <small className="text-lg">{budget.user.phone}</small>
        </div>
      )}

      <div className="flex flex-col items-center justify-center gap-2">
        <strong className="">Servies contractats:</strong>
        <ul className="w-60 list-disc list-inside flex flex-col items-center  justify-center font-bold text-sm">
          {budget.products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </ul>
      </div>
      <ViewBudgetAmount price={budget.totalPrice} />
    </Budget>
  );
};
export default BudgetCard;
