import { useState } from "react";

export const useChecked = () => {
  const [checkWeb, setCheckWeb] = useState(false);
  const [checkedDiscount, setCheckDiscount] = useState(false);

  const handlerInputDiscount = () => {
    setCheckDiscount((prev) => !prev);
  };
  const resetDiscount = () => {
    setCheckDiscount(() => false);
  };
  const handlerInputWeb = () => {
    setCheckWeb((prev) => !prev);
  };
  const resetCheckBox = () => {
    setCheckWeb(() => false);
  };
  return {
    checkWeb,
    checkedDiscount,
    handlerInputWeb,
    handlerInputDiscount,
    resetCheckBox,
    resetDiscount,
  };
};
