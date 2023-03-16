import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Spinner from "../Spinner";
import ItemList from "./ItemList";
import imgProductos from "../images/imgProductos.jpg";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { CardContext } from "../../context/CardContext";

const ItemListContainer = ({ darkMode }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setProducts } = useContext(CardContext);

  const getAllCard = async () => {
    const productCollection = collection(db, "Productos");

    const result = await getDocs(productCollection);

    const itemsResult = result.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setItems(itemsResult);
    setProducts(itemsResult);

    setIsLoading(false);
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
