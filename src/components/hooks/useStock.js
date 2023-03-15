import { useState } from "react";

const useStock = () => {
  const [stockDetail, setStockDetail] = useState();

  const setProducts = (products) => {
    const details = products.map((product) => {
      return { product, qty: product.stock };
    });
    setStockDetail(details);
  };

  console.log();

  const decrementStock = (product, qty) => {
    return qty;
  };

  const getStock = (product) => {
    //return currentDetail.qty;
  };
  return { setProducts, decrementStock, getStock };
};

export default useStock;
