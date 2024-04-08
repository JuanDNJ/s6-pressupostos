import { useEffect, useRef } from "react";
import { useStore } from "../hooks";

const Modal = () => {
  const { open, toggleModal, contentModal } = useStore();
  const modal = useRef();

  useEffect(() => {
    modal.current.open = open;
  }, [open, toggleModal]);

  return (
    <dialog ref={modal}>
      <section className="flex h-screen  items-center justify-center ">
        <article className="max-w-80 md:max-w-96 bg-stone-300 shadow-xl shadow-black rounded-md p-4 ">
          <header className="px-4 flex items-center justify-end">
            <button
              title="Close modal"
              type="button"
              className="hover:scale-[.9]"
              onClick={toggleModal}
            >
              ❌
            </button>
          </header>
          <section className="p-4 text-center">
            <h1 className="text-gray-900 font-bold">{contentModal.title}</h1>
            <p className="text-gray-600 text-pretty text-sm">
              {contentModal.description}
            </p>
          </section>
        </article>
      </section>
    </dialog>
  );
};

export default Modal;
