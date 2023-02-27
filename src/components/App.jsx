import NavBar from "./navbar/NavBar";
//import ProductCard from "./cards/ProductCard";
import React from "react";
import useAccountant from "./hooks/useAccountant";
import Footer from "./Footer";
//import CarouselImages from "./carousel/CarouselImages";
import { Box } from "@mui/system";
//import SearchAutocomplete from "./navbar/SearchAutocomplete";
//import dataArray from "./ejemplo";
//import { Grid } from "@mui/material";
import Información from "./Informacion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./register/Register";
import Login from "./login/Login";
import ItemListContainer from "./cards/ItemListContainer";
//import ProductsToShowOnSale from "./cards/ProductsToShowOnSale";
import Nosotros from "./Nosotros";
import Home from "./Home";
import ProductCardByIdItem from "./cards/ProductCardByIdItem";
import ItemsListContainerCategory from "./cards/ItemsListContainerCategory";
import Error404 from "./Error404";
import CardContextProvider from "../context/CardContext";
import ContainerOfSelectedProducts from "./shoppingCart/ContainerOfSelectedProducts";

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

  const { count } = useAccountant(0);

  //const { name } = product;

  return (
    <CardContextProvider>
      <BrowserRouter>
        <Box>
          <Información />
          <NavBar count={count} />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />}></Route>
            <Route path="/products" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemsListContainerCategory />}
            />
            <Route
              path="/product/:productId"
              element={<ProductCardByIdItem />}
            />
            <Route
              path="/shoppingCart"
              element={<ContainerOfSelectedProducts />}
            />
          </Routes>

          <Footer />
        </Box>
      </BrowserRouter>
    </CardContextProvider>
  );
}

export default App;

//  {/* <Nosotros /> */}
//         {/* <Grid container spacing={2}>
//         {dataArray.map((product) => {
//           return (
//             <Grid item xs={12} sm={6} md={4}>
//               <ProductCard product={product} onProductAdded={onProductAdded} />
//             </Grid>
//           );
//         })}
//       </Grid> */}

// {/* <Grid>
//           {productsToShow.map((product) => {
//             return (
//               <Grid item>
//                 <ProductCardById
//                   product={product}
//                   key={product.id}
//                   onProductAdded={onProductAdded}
//                 />
//               </Grid>
//             );
//           })}
//         </Grid> */}
