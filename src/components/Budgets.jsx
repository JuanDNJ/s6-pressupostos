import { useStore } from "../hooks";
import Form from "./Form";

const Budgets = () => {
  const { budgets } = useStore();
  return (
    <Form name="pressupostos">
      <header className="grid md:grid-cols-3 justify-between">
        <h2 className="text-2xl  py-2 text-stone-200 md:text-3xl text-center md:text-left">
          Pressupostos en curs:
        </h2>
        <section className="col-span-2 grid md:grid-cols-4 gap-2 p-4">
          <input
            name="search"
            className="p-2 rounded-md text-stone-400 bg-stone-800 border border-sky-200"
            type="search"
            placeholder="Search"
          />
          <input
            name="data"
            className="p-2 rounded-md text-stone-400 bg-stone-800 border border-sky-200"
            type="date"
            placeholder="Data"
          />
          <input
            name="import"
            className="p-2 rounded-md text-stone-400 bg-stone-800 border border-sky-200"
            type="number"
            placeholder="Import"
          />
          <input
            name="nombre"
            className="p-2 rounded-md text-stone-400 bg-stone-800 border border-sky-200"
            type="text"
            placeholder="Nom"
          />
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
  );
};

export default Budgets;
