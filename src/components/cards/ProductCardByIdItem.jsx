import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataArray from "../ejemplo";
import ProductCardById from "./ProductCardById";

const ProductCardByIdItem = () => {
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  const getCardById = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          dataArray.find((product) => {
            return product.id === productId; //url[param].id
            // como obtener el query param de la url
          })
        );
      }, 2000);
    });
    promise.then((request) => {
      setProduct(request);
    });
  };

  useEffect(() => {
    getCardById();
  }, []);

  return (
    <Grid>
      <ProductCardById product={product} />
    </Grid>
  );
};

export default ProductCardByIdItem;
