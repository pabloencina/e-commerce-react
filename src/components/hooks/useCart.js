import { useState } from "react";

const useCart = () => {
  const [cartDetails, setCartDetails] = useState([]);
  //const [itemStock, setItemStock] = useState(stock)

  const onProductAdded = (product, qty, stock) => {
    if (isInCart(product.id)) {
      const currentDetail = cartDetails.find(
        (detail) => detail.product.id === product.id
      );
      currentDetail.qty += qty;
    } else {
      const detail = { product, qty };
      setCartDetails([...cartDetails, detail]);
    }
  };

  const isInCart = (productId) => {
    return cartDetails.some((detail) => detail.product.id === productId);
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

  const getCartDetailToSave = () => {
    return cartDetails.map((cartDetail) => {
      return {
        productId: cartDetail.product.id,
        qty: cartDetail.qty,
      };
    });
  };
  const onProductRemove = (productId) => {
    const productDeleted = cartDetails.filter(
      (product) => product.product.id !== productId
    );

    setCartDetails(productDeleted);
  };

  const onProductChange = () => {};

  const onClearCart = () => {
    setCartDetails([]);
  };

  return {
    cartDetails,
    onProductAdded,
    getTotal,
    onProductRemove,
    onProductChange,
    onClearCart,
    getCartDetailToSave,
  };
};

export default useCart;
