import { useStore } from "../hooks/useStore";

const BudgetWebOptions = () => {
  const { countPages, countLanguages, handlerPage, handlerLanguage } =
    useStore();

  return (
    <section className="col-start-2 p-4 flex flex-col gap-4">
      <article className="flex items-center">
        <span className="flex-1 p-2 text-right">Nombre de pàgines</span>
        <div className="flex-1 flex gap-2 items-center pl-8">
          <button
            onClick={handlerPage.addPage}
            className="text-center bg-blue-300 rounded-full size-8"
          >
            +
          </button>
          <span className="text-center ">{countPages}</span>
          <button
            onClick={handlerPage.removePage}
            disabled={countPages <= 0}
            className={` text-center bg-red-300 rounded-full size-8`}
          >
            -
          </button>
        </div>
      </article>
      <article className="flex items-center  ">
        <span className="flex-1 p-2 text-right">Nombre de llenguatges</span>
        <div className="flex-1 flex gap-2 items-center pl-8">
          <button
            onClick={handlerLanguage.addLanguage}
            className="text-center bg-blue-300 rounded-full size-8"
          >
            +
          </button>
          <span className="text-center">{countLanguages}</span>
          <button
            onClick={handlerLanguage.RemoveLanguage}
            disabled={countLanguages <= 0}
            className="text-center bg-red-300 rounded-full size-8"
          >
            -
          </button>
        </div>
      </article>
    </section>
  );
};

export default BudgetWebOptions;
