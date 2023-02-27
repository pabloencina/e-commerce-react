import { useState } from "react";

const useCart = () => {
  const [cartDetails, setCartDetails] = useState([]);

  const onProductAdded = (product, qty) => {
    const detail = { product, qty };
    setCartDetails([...cartDetails, detail]);
  };
  const getTotal = () => {
    let total = 0;
    cartDetails.forEach((detail) => {
      total = total + detail.product.price * detail.qty;
    });
    return total;
  };

  const onProductRemove = () => {};

  const onProductChange = () => {};

  return {
    cartDetails,
    onProductAdded,
    getTotal,
    onProductRemove,
    onProductChange,
  };
};

export default useCart;