import { Alert } from "@mui/material";
import { useState } from "react";
import MessageCard from "../shoppingCart/MessageCard";

const useCart = () => {
  const [cartDetails, setCartDetails] = useState([]);

  const [isInCard, setInCard] = useState(false);

  const onProductAdded = (product, qty) => {
    if (!isInCard) {
      console.log("producto agregado");
      const detail = { product, qty };
      setCartDetails([...cartDetails, detail]);
    } else {
      console.log("Usted ya agrego el producto al carrito");
      <MessageCard />;
    }
    setInCard(true);
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
