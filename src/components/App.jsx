import AppBarMenu from "./AppBarMenu";
import CardDescription from "./CardDescription";
import React from "react";
import useAccountant from "./useAccountant";
//import { collection, getDocs } from "firebase/firestore";
//import { useEffect } from "react";
//import db from "./firebase-config";
//import { async } from "@firebase/util";

function App() {
  const { increase, decrease, count } = useAccountant(1);

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
      <AppBarMenu count={count} />
      <CardDescription increase={increase} decrease={decrease} count={count} />
    </>
  );
}

export default App;
