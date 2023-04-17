import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { CardContext } from "../../context/CardContext";
import imgProductos from "../images/imgProductos.jpg";
import Spinner from "../Spinner";
import ItemList from "./ItemList";

const ItemListContainer = ({ darkMode }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getAllProducts } = useContext(CardContext);

  useEffect(() => {
    const products = getAllProducts();
    setItems(products);
    setIsLoading(false);
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
            fontFamily: "Roboto",
            fontWeight: "300",
            color: darkMode ? "#724cf9" : "white",
          }}
        >
          TODOS LOS PRODUCTOS
        </h1>
      </Box>
      <Grid container spacing={2}>
        {items.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ItemList product={product} items={items} darkMode={darkMode} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ItemListContainer;
