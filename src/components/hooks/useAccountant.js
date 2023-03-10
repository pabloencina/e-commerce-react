import { useState } from "react";

const useAccountant = (initial) => {
  const [count, setCount] = useState(initial);
  //const [itemStock, setItemStock] = useState(stock)

  const increase = (quantity = 1) => {
    return setCount(count + quantity);
  };

  const decrease = (quantity = 1) => {
    return setCount(count - quantity);
  };
  return { increase, decrease, setCount, count };
};

export default useAccountant;
