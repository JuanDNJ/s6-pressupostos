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
        <article className="max-w-96 bg-stone-300 shadow-xl shadow-black rounded-md p-4 ">
          <header className="p-4 flex items-center justify-end">
            <button
              type="button"
              className="text-red-500"
              onClick={toggleModal}
            >
              ❌
            </button>
          </header>
          <section className="p-4">
            <h1 className="text-gray-900">{contentModal.title}</h1>
            <p className="text-gray-600">{contentModal.description}</p>
          </section>
        </article>
      </section>
    </dialog>
  );
};

export default Modal;
