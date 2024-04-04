import { createContext } from "react";

export const StoreCtx = createContext();

const Store = ({children}) =>  {
    const value ={}
    return (
        <StoreCtx.Provider value={value}>
            {children}
        </StoreCtx.Provider>
    );
}

export  default Store;
