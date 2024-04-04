import { useContext } from "react";
import { StoreCtx } from "../context/Store";


export  const useStore = () => {
    const ctx = useContext(StoreCtx)
    if(!ctx) throw new Error("Context not available");
    return ctx;
}


