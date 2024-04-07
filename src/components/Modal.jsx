import { useEffect, useRef } from "react";
import { useStore } from "../hooks";

const Modal = ({ children }) => {
  const { open, toggleModal } = useStore();
  const modal = useRef();
  useEffect(() => {
    if (open) {
      modal.current.style.display = "block";
    } else {
      modal.current.style.display = "none";
    }
  }, [open]);

  return (
    <dialog open ref={modal} className="show">
      <button type="button" className="text-red-500" onClick={toggleModal}>
        Close
      </button>
      <p>{children}</p>
    </dialog>
  );
};

export default Modal;
