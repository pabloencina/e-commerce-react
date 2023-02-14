import { Grid } from "@mui/material";
import React from "react";
import dataArray from "../ejemplo";
import useAccountant from "../hooks/useAccountant";
import ItemList from "./ItemList";

const ProductsToShowOnSale = () => {
  const productsToShow = dataArray.filter((card) => card.sale);
  const { increase } = useAccountant(0);

  const onProductAdded = (quantity) => {
    increase(quantity);
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
