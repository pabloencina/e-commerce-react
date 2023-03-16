import { Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { useParams } from "react-router-dom";
//import dataArray from "../ejemplo";
import Spinner from "../Spinner";
import ItemList from "./ItemList";
import categoryMats from "../images/category-mats.jpg";
import categoryYoga from "../images/ImagesProducts/velas.jpg";
import categoryMeditacion from "../images/mujer-que-medita-relaja-montanas.jpg";
import Show from "../Show";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const ItemsListContainerCategory = ({ darkMode }) => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  const getProductsByCategory = () => {
    const productCollection = collection(db, "Productos");
    const q = query(productCollection, where("category", "==", categoryId));
    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("No results");
      }
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getProductsByCategory();
  }, [categoryId]);
  console.log(products);

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
              fontFamily: "oooh baby",
              color: darkMode ? "#724cf9" : "white",
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
              <ItemList product={product} darkMode={darkMode} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ItemsListContainerCategory;
