import { useContext } from "react";
import { Ctx } from "../context/Store";

export const useStore = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("Context not available");
  return ctx;
};
