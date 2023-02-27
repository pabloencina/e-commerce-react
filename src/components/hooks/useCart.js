import { useState } from "react";

const useCart = () => {
  const [cartDetails, setCartDetails] = useState([]);

  const onProductAdded = (product, qty) => {
    const detail = { product, qty };
    setCartDetails([...cartDetails, detail]);
  };
  const getTotal = () => {
    return;
  };

  const onProductRemove = () => {};

  const onProductChange = () => {};

  return {
    cartDetails,
    onProductAdded,
    onProductRemove,
    onProductChange,
    getTotal,
  };
};

export default useCart;
