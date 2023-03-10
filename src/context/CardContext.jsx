import React from "react";
import { createContext } from "react";
import useAccountant from "../components/hooks/useAccountant";
import useCart from "../components/hooks/useCart";
import useStock from "../components/hooks/useStock";

export const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const { count, stock } = useAccountant(0);
  const {
    onProductAdded,
    cartDetails,
    getTotal,
    onProductRemove,
    onClearCart,
  } = useCart();

  const { setProducts, decrementStock, getStock } = useStock();

  return (
    <CardContext.Provider
      value={{
        stock,
        count,
        onProductAdded,
        cartDetails,
        getTotal,
        onProductRemove,
        decrementStock,
        onClearCart,
        getStock,
        setProducts,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
