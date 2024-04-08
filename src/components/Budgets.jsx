import { useStore } from "../hooks";
import Form from "./Form";

const Budgets = () => {
  const { budgets } = useStore();
  return budgets.length ? (
    <Form name="pressupostos">
      <header className="grid md:grid-cols-4 items-center justify-between">
        <h2 className="md:col-span-2 text-2xl py-2 text-stone-200 md:text-3xl text-center md:text-left">
          Pressupostos en curs:
        </h2>
        <section className="col-span-2 grid grid-cols-5 items-center justify-around gap-4 text-stone-200">
          <input
            name="search"
            className="col-span-2 md:col-span-2 py-1 px-2 rounded-md bg-stone-800 border border-sky-200"
            type="search"
            placeholder="🍳 Search"
          />

          <button
            type="button"
            className="px-2 text-sm font-bold flex flex-inline items-center  justify-center"
          >
            <span>Data</span> <span> 🔺</span>
            <span>🔻</span>
          </button>
          <button
            type="button"
            className="px-2 text-sm font-bold flex flex-inline items-center justify-end"
          >
            Nom
          </button>
          <button
            type="button"
            className="px-2 text-sm font-bold flex flex-inline items-center justify-end"
          >
            ❌
          </button>
        </section>
      </header>
      {budgets.map((bud, index) => {
        return (
          <article
            key={index}
            className="md:min-h-56 grid md:grid-cols-3 bg-stone-200 rounded-md overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center p-4 ">
              <strong className="text-xl">{bud.nameBudget}</strong>
              <small className="font-bold">{bud.user.email}</small>
              <small className="text-lg">{bud.user.phone}</small>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <strong className="w-60">Servies contractats:</strong>
              <ul className="w-60 list-disc list-inside flexflex-col items-stajustify-center font-bold text-sm">
                {bud.products.map((prod) => (
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
                {bud.totalPrice} <small className="text-blue-500">€</small>
              </strong>
            </div>
          </article>
        );
      })}
    </Form>
  ) : (
    ""
  );
};

export default Budgets;
