import React from "react";
import { createContext } from "react";
import useAccountant from "../components/hooks/useAccountant";

export const CardContext = createContext();
// export const CardContext = createContext({
//   count: 0,
//   onProductAdded: () => {},
// });

const CardContextProvider = ({ children }) => {
  const { increase, count } = useAccountant(0);

  const onProductAdded = (quantity) => {
    increase(quantity);
  };

  return (
    <CardContext.Provider value={{ count, onProductAdded }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
