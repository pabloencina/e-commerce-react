import React, { useEffect } from "react";
import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import dataArray from "../ejemplo";

const ShoppingCartCard = () => {
  //const { count } = useAccountant();

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
    <Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: "70%",
            display: "flex",
            //backgroundColor: "#EDF67D",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          {items.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <ul>
                  <li>{product.name}</li>
                </ul>
              </Grid>
            );
          })}
        </Card>
      </Box>
    </Box>
  );
};

export default ShoppingCartCard;
