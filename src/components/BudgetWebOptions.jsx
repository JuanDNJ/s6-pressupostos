import { useStore } from "../hooks/useStore";
import Modal from "./Modal";

const BudgetWebOptions = () => {
  const { countPages, countLanguages, handlerPage, handlerLanguage } =
    useStore();

  return (
    <section className="col-start-1 col-end-3 md:col-start-2 py-4 md:px-2 flex flex-col gap-2 md:gap-4">
      <article className="flex items-center">
        <span className="flex-1 p-2 text-right text-sm md:text-sm">
          <Modal>Info pagines</Modal> Nombre de pàgines
        </span>
        <div className="flex-1 flex gap-2 items-center pl-8">
          <button
            type="button"
            onClick={handlerPage.addPage}
            className="text-center bg-blue-300 rounded-full size-8 hover:border border-black active:scale-[.8]"
          >
            <span className="emoji-plus text-sm">➕</span>
          </button>
          <span className="text-center ">{countPages}</span>
          <button
            type="button"
            onClick={handlerPage.removePage}
            disabled={countPages <= 0}
            className={` text-center bg-red-300 rounded-full size-8 hover:border border-black active:scale-[.8]`}
          >
            <span className="emoji-minor text-sm">➖</span>
          </button>
        </div>
      </article>
      <article className="flex items-center  ">
        <span className="flex-1 p-2 text-right text-sm md:text-sm">
          <Modal>Info llenguatges</Modal> Nombre de llenguatges
        </span>
        <div className="flex-1 flex gap-2 items-center pl-8">
          <button
            type="button"
            onClick={handlerLanguage.addLanguage}
            className="text-center bg-blue-300 rounded-full size-8 hover:border border-black active:scale-[.8]"
          >
            <span className="emoji-plus text-sm">➕</span>
          </button>
          <span className="text-center">{countLanguages}</span>
          <button
            type="button"
            onClick={handlerLanguage.RemoveLanguage}
            disabled={countLanguages <= 0}
            className="text-center bg-red-300 rounded-full size-8 hover:border border-black active:scale-[.8]"
          >
            <span className="emoji-minor text-sm">➖</span>
          </button>
        </div>
      </article>
    </section>
  );
};

export default BudgetWebOptions;
