import NavBar from "./navbar/NavBar";
import ProductCard from "./ProductCard";
import React from "react";
import useAccountant from "./hooks/useAccountant";
import Footer from "./Footer";
import CarouselImages from "./carousel/CarouselImages";
import Nosotros from "./Nosotros";
//import { collection, getDocs } from "firebase/firestore";
//import { useEffect } from "react";
//import db from "./firebase-config";
//import { async } from "@firebase/util";

function App() {
  const { count, increase } = useAccountant(0);

  const onProductAdded = (quantity) => {
    increase(quantity);
  };

  // useEffect(() => {
  //   const getUsuarios = async () => {
  //     const datos = await getDocs(collection(db, "usuarios"));

  //     datos.forEach((documento) => {
  //       console.log(documento.data().edad);
  //     });
  //   };
  //   getUsuarios();
  // }, []);

  return (
    <>
      <NavBar count={count} />
      {/* <Nosotros /> */}

      <CarouselImages />
      {/* <ItemListContainer greeting={"La página se encuentra en reparación"} /> */}
      <ProductCard onProductAdded={onProductAdded} />
      <Footer />
    </>
  );
}

export default App;
