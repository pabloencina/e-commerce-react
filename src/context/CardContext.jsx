import React from "react";
import { createContext } from "react";
import useAccountant from "../components/hooks/useAccountant";
import useCart from "../components/hooks/useCart";

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const { count } = useAccountant(0);
  const { onProductAdded, cartDetails, getTotal, onProductRemove } = useCart();

  return (
    <CardContext.Provider
      value={{ count, onProductAdded, cartDetails, getTotal, onProductRemove }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
