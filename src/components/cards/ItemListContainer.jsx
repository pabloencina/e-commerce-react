import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import dataArray from "../ejemplo";
import Spinner from "../Spinner";
import ItemList from "./ItemList";
import imgProductos from "../images/imgProductos.jpg";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllCard = () => {
    const promise = new Promise((resolve) => {
      setIsLoading(true);
      setTimeout(() => {
        resolve(dataArray);
        setIsLoading(false);
      }, 2000);
    });
    promise.then((request) => {
      setItems(request);
    });
  };

  useEffect(() => {
    getAllCard();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <Box m={5}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={imgProductos}
          alt="Imagén-productos"
          style={{ width: "80%", height: "100%" }}
        ></img>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "oooh baby",
            color: "#724cf9",
          }}
        >
          TODOS LOS PRODUCTOS
        </h1>
      </Box>
      <Grid container spacing={2}>
        {items.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ItemList product={product} items={items} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ItemListContainer;
