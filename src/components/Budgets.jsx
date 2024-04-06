import Form from "./Form";

const Budgets = () => {
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
      <article className="md:min-h-56 grid md:grid-cols-3 bg-stone-200 rounded-md overflow-hidden">
        <div className="flex flex-col items-center justify-center p-4 ">
          <strong className="text-xl">Manolo el del Bombo</strong>
          <small className="font-bold">manoloeldelbombo@gmail.com</small>
          <small className="text-lg">654 321 369</small>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <strong className="w-60">Servies contractats:</strong>
          <ul className="w-60 list-disc list-inside flexflex-col items-stajustify-center font-bold text-sm">
            <li>Seo</li>
            <li>Web (4 pàgines, 2 llenguatges)</li>
          </ul>
        </div>
        <div className="flex md:flex-col items-center justify-center gap-2 py-4 px-2">
          <strong className="text-xl font-extrabold text-stone-500">
            Total:
          </strong>
          <strong className="text-3xl font-extrabold">
            1520 <small className="text-blue-500">€</small>
          </strong>
        </div>
      </article>
      <article className="md:min-h-56 grid md:grid-cols-3 bg-stone-200 rounded-md overflow-hidden">
        <div className="flex flex-col items-center justify-center p-4 ">
          <strong className="text-xl">Pepe Goteras</strong>
          <small className="font-bold">goteras@gmail.com</small>
          <small className="text-lg">896 321 582</small>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <strong className="w-60">Servies contractats:</strong>
          <ul className="w-60 list-disc list-inside flexflex-col items-stajustify-center font-bold text-sm">
            <li>Seo</li>
            <li>Ads</li>
            <li>Web (4 pàgines, 2 llenguatges)</li>
          </ul>
        </div>
        <div className="flex  md:flex-col items-center justify-center gap-2 py-4 px-2">
          <strong className="text-xl font-extrabold text-stone-500">
            Total:
          </strong>
          <strong className="text-3xl font-extrabold">
            1520 <small className="text-blue-500">€</small>
          </strong>
        </div>
      </article>
    </Form>
  );
};

export default Budgets;
