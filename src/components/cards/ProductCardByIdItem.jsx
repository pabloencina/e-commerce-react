import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataArray from "../ejemplo";
import Spinner from "../Spinner";
import ProductCardById from "./ProductCardById";

const ProductCardByIdItem = ({ darkMode }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  const getCardById = () => {
    const promise = new Promise((resolve) => {
      setIsLoading(true);
      setTimeout(() => {
        resolve(
          dataArray.find((product) => {
            return product.id === productId; //url[param].id
            // como obtener el query param de la url
          })
        );
        setIsLoading(false);
      }, 2000);
    });
    promise.then((request) => {
      setProduct(request);
    });
  };

  useEffect(() => {
    getCardById();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <Grid>
      <ProductCardById product={product} darkMode={darkMode} />
    </Grid>
  );
};

export default ProductCardByIdItem;
