import { Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { useParams } from "react-router-dom";
//import dataArray from "../ejemplo";
import { CardContext } from "../../context/CardContext";
import categoryMats from "../images/category-mats.jpg";
import categoryYoga from "../images/ImagesProducts/velas.jpg";
import categoryMeditacion from "../images/mujer-que-medita-relaja-montanas.jpg";
import Show from "../Show";
import Spinner from "../Spinner";
import ItemList from "./ItemList";

const ItemsListContainerCategory = ({ darkMode }) => {
  const [productsCategory, setProductsCategory] = useState([]);
  const { getAllProducts } = useContext(CardContext);

  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  const getProductsByCategory = async () => {
    const allProducts = getAllProducts();

    const productsCategory = allProducts.filter((product) => {
      return product.category === categoryId;
    });

    setProductsCategory(productsCategory);
    setIsLoading(false);
  };

  useEffect(() => {
    getProductsByCategory();
  }, [categoryId]);

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
          <Show when={categoryId === "mats"}>
            <img
              src={categoryMats}
              alt="category-mats"
              style={{ width: "80%", height: "100%" }}
            ></img>
          </Show>

          <Show when={categoryId === "yoga"}>
            <img
              src={categoryYoga}
              alt="category-yoga"
              style={{ width: "80%", height: "70%" }}
            ></img>
          </Show>

          <Show when={categoryId === "meditation"}>
            <img
              src={categoryMeditacion}
              alt="category-meditation"
              style={{ width: "80%", height: "70%" }}
            ></img>
          </Show>

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
              fontFamily: "Roboto",
              fontWeight: "300",
              color: darkMode ? "#724cf9" : "white",
            }}
          >
            {categoryId.toUpperCase()}
          </h1>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {productsCategory.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ItemList product={product} darkMode={darkMode} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ItemsListContainerCategory;
