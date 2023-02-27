import React from "react";
import { createContext } from "react";
//import dataArray from "../components/ejemplo";
import useAccountant from "../components/hooks/useAccountant";
import useCart from "../components/hooks/useCart";

export const CardContext = createContext();
// export const CardContext = createContext({
//   count: 0,
//   onProductAdded: () => {},
// });

const CardContextProvider = ({ children }) => {
  const { count } = useAccountant(0);
  const { onProductAdded, cartDetails, getTotal } = useCart();

  return (
    <CardContext.Provider
      value={{ count, onProductAdded, cartDetails, getTotal }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
