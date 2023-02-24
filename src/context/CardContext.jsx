import React from "react";
import { createContext } from "react";

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  return <CardContext.Provider value={[]}>{children}</CardContext.Provider>;
};

export default CardContextProvider;
