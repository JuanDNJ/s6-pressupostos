import { useStore } from "../hooks";
import Form from "./Form";
import BudgetCard from "./BudgetCard";

const Budgets = () => {
  const {
    budgets,
    filterBudgets,
    setFilterBudgets,
    checkImport,
    setCheckImport,
    checkDate,
    setCheckDate,
  } = useStore();

  const handlerSearch = (eve) => {
    setFilterBudgets(() =>
      budgets.filter((rec) =>
        rec.nameBudget.toLowerCase().includes(eve.target.value.toLowerCase())
      )
    );
  };

  const handlerImport = (action) => {
    if (action === 1) {
      setFilterBudgets(() =>
        budgets.sort((a, b) => b.totalPrice - a.totalPrice)
      );
      setCheckImport((prev) => !prev);
    } else {
      setFilterBudgets(() =>
        budgets.sort((a, b) => a.totalPrice - b.totalPrice)
      );
      setCheckImport((prev) => !prev);
    }
    //  Ordernar por importe, se puede crear un toggle para ordenar de menor a mayor o al contrario
    // setFilterBudgets(() => budgets.sort((a, b) => b.totalPrice - a.totalPrice));
  };
  const handlerNom = () => {
    //  Ordenar por nombre,  se puede crear un toggle para ordenar A - Z o Z -A

    setFilterBudgets(() =>
      budgets.sort((a, b) => {
        if (a.nameBudget < b.nameBudget) {
          return -1;
        }
        if (a.nameBudget > b.nameBudget) {
          return 1;
        }
        return 0;
      })
    );
  };
  const handlerDate = (action) => {
    //  Ordenar por fecha,  se puede crear un toggle para ordenar de menor a mayor o al contrario
    if (action === 1) {
      setFilterBudgets(() => budgets.sort((a, b) => a.date - b.date));
      setCheckDate((prev) => !prev);
    } else {
      setFilterBudgets(() => budgets.sort((a, b) => b.date - a.date));
      setCheckDate((prev) => !prev);
    }
  };

  return (
    <Form name="pressupostos">
      <header className="flex flex-col md:flex-row justify-between">
        <h2 className="md:col-span-6 text-2xl py-2 text-stone-200 md:text-3xl">
          Pressupostos en curs:
        </h2>
        <section className="flex  md:flex-row md:items-center justify-end gap-2 text-stone-200">
          <div className="flex-1">
            <input
              name="search"
              className="w-full py-1 px-2 rounded-md bg-stone-800 border border-sky-200"
              type="search"
              placeholder="🍳 Search"
              onInput={handlerSearch}
            />
          </div>
          <div className="flex gap-2 justify-center">
            <a
              onClick={checkDate ? () => handlerDate(1) : () => handlerDate(0)}
              className="col-span-2  md:col-span-1 text-sm font-bold flex items-center  cursor-pointer"
            >
              <span>Data</span>
              <span className={`${checkDate && "rotate-180"}`}>🔺</span>
            </a>
            <a
              onClick={
                checkImport ? () => handlerImport(1) : () => handlerImport(0)
              }
              className="col-span-2 md:col-span-1 text-sm font-bold flex items-center  cursor-pointer"
            >
              <span>Import</span>
              <span className={`${checkImport && "rotate-180"}`}>🔻</span>
            </a>
            <a
              className="col-span-2 md:col-span-1 text-sm font-bold flex items-center cursor-pointer"
              onClick={handlerNom}
            >
              <span>Nom</span>
            </a>
            <button
              className="flex justify-end col-span-2 "
              type="reset"
              title="Reinicialitzar filtre"
            >
              <span>❌</span>
            </button>
          </div>
        </section>
      </header>
      {filterBudgets.map((bud, index) => {
        return <BudgetCard key={index} budget={bud} />;
      })}
    </Form>
  );
};

export default Budgets;
