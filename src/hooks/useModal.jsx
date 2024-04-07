import { useState } from "react";
import { infoModal as info } from "../utils";
export const useModal = () => {
  const [open, setOpen] = useState(false);
  const [infoModal] = useState(info);

  const [contentModal, setContentModal] = useState(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  const addContentModal = (payload) => {
    setContentModal(() => payload);
  };
  return { open, contentModal, infoModal, toggleModal, addContentModal };
};
