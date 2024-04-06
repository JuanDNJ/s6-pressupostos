import { useState } from "react";

export const useChecked = () => {
  const [checkWeb, setCheckWeb] = useState(false);

  const handlerInputWeb = () => {
    setCheckWeb((prev) => !prev);
  };
  const resetCheckBox = () => {
    setCheckWeb(() => false);
  };
  return { checkWeb, handlerInputWeb, resetCheckBox };
};
