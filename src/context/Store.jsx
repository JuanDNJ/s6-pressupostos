import { createContext, useState } from "react";
import listProducts from "../data/products.json";
export const StoreCtx = createContext();

const Store = ({ children }) => {
  const [products] = useState(listProducts);
  const [preuPressupostat, setPreuPressupostat] = useState(0);
  const [pages, setPages] = useState(0);
  const [languages, setlanguages] = useState(0);

  const updatePagesWeb = (action, numPages) => {
    if (action === 0) {
      setPreuPressupostat((prev) => prev - numPages * 30);
    }
    if (action === 1) {
      setPreuPressupostat((prev) => prev + numPages * 30);
    }
  };

  const addPage = () => {
    setPages((prev) => prev + 1);
  };
  const removePage = () => {
    setPages((prev) => prev - 1);
  };
  const resetPages = () => setPages(() => 0);

  const updateLanguagesWeb = () => {
    setlanguages(() => languages);
  };

  const addPreu = (newPrice) => {
    setPreuPressupostat((price) => price + newPrice);
  };
  const removePreu = (newPrice) => {
    setPreuPressupostat((price) => price - newPrice);
  };
  
  const value = {
    titleWeb: "WEBS THREE B",
    preuPressupostat,
    products,
    pages,
    languages,
    addPreu,
    removePreu,
    updatePagesWeb,
    updateLanguagesWeb,
    addPage,
    removePage,
    resetPages,
  };

  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
};

export default Store;
