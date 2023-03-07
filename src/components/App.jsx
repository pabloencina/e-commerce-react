import NavBar from "./navbar/NavBar";
import React from "react";
import useAccountant from "./hooks/useAccountant";
import Footer from "./Footer";
import { Box } from "@mui/system";
import Información from "./Informacion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./register/Register";
import Login from "./login/Login";
import ItemListContainer from "./cards/ItemListContainer";
import Nosotros from "./Nosotros";
import Home from "./Home";
import ProductCardByIdItem from "./cards/ProductCardByIdItem";
import ItemsListContainerCategory from "./cards/ItemsListContainerCategory";
import Error404 from "./Error404";
import CardContextProvider from "../context/CardContext";
import ContainerOfSelectedProducts from "./shoppingCart/ContainerOfSelectedProducts";
import { useState } from "react";
import "../cssStyles/switchMode.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { count } = useAccountant(0);

  return (
    <CardContextProvider>
      <BrowserRouter>
        <Box className={darkMode ? "light-mode" : "dark-mode"}>
          <Información />
          <NavBar count={count} setDarkMode={setDarkMode} darkMode={darkMode} />

          <Routes>
            <Route path="/login" element={<Login darkMode={darkMode} />} />
            <Route
              path="/register"
              element={<Register darkMode={darkMode} />}
            />
            <Route path="nosotros" element={<Nosotros darkMode={darkMode} />} />
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="*" element={<Error404 />}></Route>
            <Route
              path="/products"
              element={<ItemListContainer darkMode={darkMode} />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemsListContainerCategory darkMode={darkMode} />}
            />
            <Route
              path="/product/:productId"
              element={<ProductCardByIdItem darkMode={darkMode} />}
            />
            <Route
              path="/shoppingCart"
              element={<ContainerOfSelectedProducts darkMode={darkMode} />}
            />
          </Routes>

          <Footer />
        </Box>
      </BrowserRouter>
    </CardContextProvider>
  );
}

export default App;
