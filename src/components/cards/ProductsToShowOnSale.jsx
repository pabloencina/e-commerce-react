import { Grid } from "@mui/material";
//import React, { useState } from "react";
import dataArray from "../ejemplo";
import useAccountant from "../hooks/useAccountant";
import ItemList from "./ItemList";

const ProductsToShowOnSale = () => {
  const productsToShow = dataArray.filter((card) => card.sale);

  const { increase, stock } = useAccountant(0);
  console.log(stock);

  //const [productInStock, setProductInStock] = useState(stock);

  const onProductAdded = (quantity) => {
    increase(quantity);
    // if (productInStock >= count) {
    //   setProductInStock(productInStock - count);
    //   setCount(1);
    // }
  };
  return (
    <Grid container spacing={2}>
      {productsToShow.map((product) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <ItemList
              product={product}
              key={product.id}
              onProductAdded={onProductAdded}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProductsToShowOnSale;
