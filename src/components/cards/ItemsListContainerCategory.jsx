import { Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { useParams } from "react-router-dom";
import dataArray from "../ejemplo";
import Spinner from "../Spinner";
import ItemList from "./ItemList";
import categoryMats from "../images/category-mats.jpg";
import categoryMeditacion from "../images/mujer-que-medita-relaja-montanas.jpg";

const ItemsListContainerCategory = () => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const { categoryId } = useParams();

  const getCardByCategory = () => {
    const promise = new Promise((resolve) => {
      setIsLoading(true);
      setTimeout(() => {
        resolve(
          dataArray.filter((product) => {
            return product.category === categoryId; //url[param].id
            // como obtener el query param de la url
          })
        );
        setIsLoading(false);
      }, 2000);
    });
    promise.then((request) => {
      setProducts(request);
    });
  };

  useEffect(() => {
    getCardByCategory();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <Box>
      <Box m={5}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {categoryId === "mats" ? (
            <img
              src={categoryMats}
              alt="category-mats"
              style={{ width: "80%", height: "100%" }}
            ></img>
          ) : (
            <img
              src={categoryMeditacion}
              alt="category-meditation"
              style={{ width: "80%", height: "70%" }}
            ></img>
          )}

          <Divider />
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
              fontFamily: " Hind Madurai",
              color: "#724cf9",
            }}
          >
            {categoryId.toUpperCase()}
          </h1>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ItemList product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ItemsListContainerCategory;
