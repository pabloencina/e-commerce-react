import { Box } from "@mui/system";
import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CardContext } from "../context/CardContext";
import "../cssStyles/switchMode.css";
import { db } from "../firebase";
import ItemListContainer from "./cards/ItemListContainer";
import ItemsListContainerCategory from "./cards/ItemsListContainerCategory";
import ProductCardByIdItem from "./cards/ProductCardByIdItem";
import CompletedCheckout from "./checkout/CompletedCheckout";
import SuccessfulPurchase from "./checkout/SuccessfulPurchase";
import Error404 from "./Error404";
import Footer from "./Footer";
import Home from "./Home";
import useAccountant from "./hooks/useAccountant";
import Información from "./Informacion";
import Login from "./login/Login";
import NavBar from "./navbar/NavBar";
import Nosotros from "./Nosotros";
import Register from "./register/Register";
import ContainerOfSelectedProducts from "./shoppingCart/ContainerOfSelectedProducts";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const { count } = useAccountant(0);

  const { setProducts } = useContext(CardContext);

  const getAllCard = async () => {
    const productCollection = collection(db, "Productos");

    const result = await getDocs(productCollection);

    const itemsResult = result.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProducts(itemsResult);
  };

  useEffect(() => {
    getAllCard();
  }, []);

  return (
    <BrowserRouter>
      <Box className={darkMode ? "light-mode" : "dark-mode"}>
        <Información />
        <NavBar count={count} setDarkMode={setDarkMode} darkMode={darkMode} />

        <Routes>
          <Route path="/login" element={<Login darkMode={darkMode} />} />
          <Route path="/register" element={<Register darkMode={darkMode} />} />
          <Route
            path="/checkout"
            element={<CompletedCheckout darkMode={darkMode} />}
          />
          <Route
            path="/successful-purchase/:orderId"
            element={<SuccessfulPurchase darkMode={darkMode} />}
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
  );
}

export default App;
