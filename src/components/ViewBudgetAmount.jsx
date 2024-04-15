export default function ViewBudgetAmount({ price }) {
  return (
    <div className="text-stone-900 flex md:flex-col items-center justify-center gap-2 py-4 px-2">
      <strong className="text-xl md:text-lg font-extrabold text-stone-500">
        Total:
      </strong>
      <strong className="text-2xl font-extrabold">
        {price} <small className="text-blue-500">€</small>
      </strong>
    </div>
  );
}
