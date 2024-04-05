const FormFooter = () => {
  return (
    <footer className="flex flex-col gap-4">
      <section className="p-4 flex flex-col  rounded-md overflow-hidden bg-stone-200">
        <h2 className="text-2xl font-bold  text-stone-700">
          Demanar pressupost
        </h2>
        <article className="flex flex-col md:flex-row justify-between gap-2 md:gap-none py-4">
          <input
            className="p-2 rounded-md text-stone-400 bg-stone-800 border border-sky-200"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="p-2 rounded-md text-stone-400 bg-stone-800 border border-sky-200"
            type="tel"
            placeholder="Telèfon"
          />
          <input
            className="p-2 rounded-md text-stone-400 bg-stone-800 border border-sky-200"
            type="email"
            placeholder="E-mail"
          />
          <button
            type="submit"
            className="bg-green-700 p-2 px-4 rounded-md text-stone-200 font-bold border hover:bg-stone-50 hover:text-green-700 hover:border hover:border-green-700"
          >
            Solicitar pressupost +
          </button>
        </article>
      </section>
    </footer>
  );
};

export default FormFooter;
