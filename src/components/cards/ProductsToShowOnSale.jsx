import { Grid } from "@mui/material";
import { Box } from "@mui/system";
//import React, { useState } from "react";
import dataArray from "../ejemplo";
//import useAccountant from "../hooks/useAccountant";
import ItemList from "./ItemList";
import ofertas from "../images/ofertas.jpg";
import { CardContext } from "../../context/CardContext";
import { useContext } from "react";

const ProductsToShowOnSale = () => {
  const productsToShow = dataArray.filter((card) => card.sale);

  const { onProductAdded } = useContext(CardContext);
  console.log(onProductAdded);

  // const { increase } = useAccountant(0);

  // const onProductAdded = (quantity) => {
  //   increase(quantity);

  // };
  return (
    <Box m={5}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#724cf9",
          height: "100px",
          width: "100%",
        }}
      >
        <p
          style={{ color: "white", fontFamily: "oooh baby", fontSize: "36px" }}
        >
          DESCUENTOS IMPERDIBLES
        </p>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={ofertas}
          alt="ofertas"
          style={{ width: "60%", height: "600px" }}
        ></img>
      </Box>

      <Box m={5}>
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
      </Box>
    </Box>
  );
};

export default ProductsToShowOnSale;
