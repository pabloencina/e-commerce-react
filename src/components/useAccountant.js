import { useState } from "react";

const useAccountant = (initial) => {
  const [count, setCount] = useState(initial);

  const increase = () => {
    return setCount(count + 1);
  };

  const decrease = () => {
    return setCount(count - 1);
  };
  return { increase, decrease, setCount, count };
};

export default useAccountant;
