import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { useParams } from "react-router-dom";
import dataArray from "../ejemplo";
import ItemList from "./ItemList";

const ItemsListContainerCategory = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  const { categoryId } = useParams();

  const getCardByCategory = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          dataArray.filter((product) => {
            console.log(product.category === categoryId);
            return product.category === categoryId; //url[param].id
            // como obtener el query param de la url
          })
        );
      }, 2000);
    });
    promise.then((request) => {
      setProducts(request);
    });
  };

  useEffect(() => {
    getCardByCategory();
  });

  return (
    <Grid container spacing={2}>
      {products.map((product) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <ItemList product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ItemsListContainerCategory;
