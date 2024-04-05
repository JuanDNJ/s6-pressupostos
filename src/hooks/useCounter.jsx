import { useState } from "react";

export const useCounter = () => {
  const [countPages, setCountpages] = useState(0);
  const [countLanguages, setCountLanguages] = useState(0);

  const handlerPage = {
    addPage: () => {
      setCountpages(() => countPages + 1);
    },
    removePage: () => {
      setCountpages(() => countPages - 1);
    },
  };
  const handlerLanguage = {
    addLanguage: () => {
      setCountLanguages(() => countLanguages + 1);
    },
    RemoveLanguage: () => {
      setCountLanguages(() => countLanguages - 1);
    },
  };
  const resetCount = () => {
    setCountpages(() => 0);
    setCountLanguages(() => 0);
  };
  return {
    countPages,
    countLanguages,
    handlerPage,
    handlerLanguage,
    resetCount,
  };
};
