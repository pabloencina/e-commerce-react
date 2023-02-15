import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import dataArray from "../ejemplo";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const getAllCard = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataArray);
      }, 2000);
    });
    promise.then((request) => {
      setItems(request);
    });
  };

  useEffect(() => {
    getAllCard();
  }, []);

  return (
    <Grid container spacing={2}>
      {items.map((product) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <ItemList product={product} items={items} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ItemListContainer;
