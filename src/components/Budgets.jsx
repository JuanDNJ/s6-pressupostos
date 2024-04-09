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
      <header className="grid md:grid-cols-4 items-center justify-between">
        <h2 className="md:col-span-2 text-2xl py-2 text-stone-200 md:text-3xl text-center md:text-left">
          Pressupostos en curs:
        </h2>
        <section className="col-span-2 grid grid-cols-6 items-center justify-around gap-4 text-stone-200">
          <input
            name="search"
            className="col-span-2 md:col-span-2 py-1 px-2 rounded-md bg-stone-800 border border-sky-200"
            type="search"
            placeholder="🍳 Search"
            onInput={handlerSearch}
          />
          {checkDate ? (
            <a
              onClick={() => handlerDate(1)}
              className="px-2 text-sm font-bold flex flex-inline items-center justify-end cursor-pointer"
            >
              <span>Data</span> <span> 🔺</span>
            </a>
          ) : (
            <a
              onClick={() => handlerDate(0)}
              className="px-2 text-sm font-bold flex flex-inline items-center justify-end cursor-pointer"
            >
              <span>Data</span>
              <span>🔻</span>
            </a>
          )}

          {checkImport ? (
            <a
              onClick={() => handlerImport(1)}
              className="px-2 text-sm font-bold flex flex-inline items-center justify-end cursor-pointer"
            >
              Import <span>🔻</span>
            </a>
          ) : (
            <a
              className="px-2 text-sm font-bold flex flex-inline items-center justify-end cursor-pointer"
              onClick={() => handlerImport(0)}
            >
              Import <span> 🔺</span>
            </a>
          )}
          <a
            className="px-2 text-sm font-bold flex flex-inline items-center cursor-pointer"
            onClick={handlerNom}
          >
            Nom
          </a>
          <button type="reset" title="Reinicialitzar filtre">
            <span>❌</span>
          </button>
        </section>
      </header>
      {filterBudgets.map((bud, index) => {
        return <BudgetCard key={index} budget={bud} />;
      })}
    </Form>
  );
};

export default Budgets;
