import NavBar from "./navbar/NavBar";
import ProductCard from "./cards/ProductCard";
import React from "react";
import useAccountant from "./hooks/useAccountant";
import Footer from "./Footer";
import CarouselImages from "./carousel/CarouselImages";
import { Box } from "@mui/system";
import SearchAutocomplete from "./navbar/Autocomplete";
import dataArray from "./ejemplo";
import { Grid } from "@mui/material";
import Información from "./Informacion";
import ProductCardById from "./cards/ProductCardById";
//import ItemCount from "./cards/ItemCount";
// import Register from "./register/Register";
// import Login from "./login/Login";
//import Nosotros from "./Nosotros";
//import { collection, getDocs } from "firebase/firestore";
//import { useEffect } from "react";
//import db from "./firebase-config";
//import { async } from "@firebase/util";

function App() {
  // useEffect(() => {
  //   const getUsuarios = async () => {
  //     const datos = await getDocs(collection(db, "usuarios"));

  //     datos.forEach((documento) => {
  //       console.log(documento.data().edad);
  //     });
  //   };
  //   getUsuarios();
  // }, []);

  const { count, increase } = useAccountant(0);

  const onProductAdded = (quantity) => {
    increase(quantity);
  };

  const productsToShow = dataArray.filter((card) => card.sale);

  return (
    <Box>
      <Información />
      <NavBar count={count} />
      <Box
        m={3}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchAutocomplete />
      </Box>
      <CarouselImages />

      {/* <Grid container spacing={2}>
        {dataArray.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard product={product} onProductAdded={onProductAdded} />
            </Grid>
          );
        })}
      </Grid> */}

      <Grid container spacing={2}>
        {productsToShow.map((product) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <ProductCard
                product={product}
                key={product.id}
                onProductAdded={onProductAdded}
              />
            </Grid>
          );
        })}
      </Grid>

      <Grid container spacing={2}>
        {productsToShow.map((product) => {
          return (
            <Grid item>
              <ProductCardById
                product={product}
                key={product.id}
                onProductAdded={onProductAdded}
              />
            </Grid>
          );
        })}
      </Grid>

      {/* <Login />
      <Register /> */}
      <Footer />
    </Box>
  );
}

export default App;
