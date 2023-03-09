import { useState } from "react";

const useCart = () => {
  const [cartDetails, setCartDetails] = useState([]);

  const onProductAdded = (product, qty) => {
    if (isInCard(product.id)) {
      // console.log(product.id);
      let position = cartDetails.findIndex((p) => p.id === product.id);
      console.log(position);
      //cartDetails[position].qty += qty;
      console.log("Ya fue agregado este producto a tu carrito");
      setCartDetails([...cartDetails]);
    } else {
      const detail = { product, qty };
      setCartDetails([...cartDetails, detail]);
    }
    // cartDetails.find((product) =>
    //   console.log(product.product.id !== productId)
    // );
    // const detail = { product, qty };
    // setCartDetails([...cartDetails, detail]);
  };

  const isInCard = (productId) => {
    const cardIndex = cartDetails.some((prod) => prod.product.id === productId);
    console.log(cardIndex);
    return cardIndex;
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
