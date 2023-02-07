import NavBar from "./navbar/NavBar";
import ProductCard from "./cards/ProductCard";
import React from "react";
import useAccountant from "./hooks/useAccountant";
import Footer from "./Footer";
import CarouselImages from "./carousel/CarouselImages";
import { Box } from "@mui/system";
import SearchAutocomplete from "./navbar/Autocomplete";
import dataArray from "./ejemplo";
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
      {/* <ProductCard onProductAdded={onProductAdded} /> */}
      {productsToShow.map((product) => {
        return (
          <ProductCard
            product={product}
            key={product.id}
            onProductAdded={onProductAdded}
          />
        );
      })}

      <Footer />
    </Box>
  );
}

export default App;
