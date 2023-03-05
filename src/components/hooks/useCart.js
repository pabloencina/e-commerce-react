import { useState } from "react";

const useCart = () => {
  const [cartDetails, setCartDetails] = useState([]);

  const onProductAdded = (product, qty, productId) => {
    cartDetails.find((product) =>
      console.log(product.product.id !== productId)
    );
    const detail = { product, qty };
    setCartDetails([...cartDetails, detail]);
  };
  const getTotal = () => {
    let total = 0;

    cartDetails.forEach((detail) => {
      if (detail.product.sale) {
        total =
          total +
          (detail.product.price -
            (detail.product.price * detail.product.offerPrice) / 100) *
            detail.qty;
      } else {
        total = total + detail.product.price * detail.qty;
      }
    });
    return total;
  };

  const onProductRemove = (productId) => {
    const productDeleted = cartDetails.filter(
      (product) => product.product.id !== productId
    );

    setCartDetails(productDeleted);
  };

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
