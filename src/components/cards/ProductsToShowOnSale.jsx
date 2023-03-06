import { Grid } from "@mui/material";
import { Box } from "@mui/system";
//import dataArray from "../ejemplo";
import ItemList from "./ItemList";
import ofertas from "../images/ofertas.jpg";
import { CardContext } from "../../context/CardContext";
import { useContext } from "react";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";

const ProductsToShowOnSale = ({ darkMode }) => {
  //const productsToShow = dataArray.filter((card) => card.sale);
  const [productsOnSale, setProductsOnSale] = useState([]);

  const { onProductAdded } = useContext(CardContext);

  const getProductOnSale = () => {
    const productCollection = collection(db, "Productos");
    const q = query(productCollection, where("sale", "==", true));
    getDocs(q).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("No results");
      }
      setProductsOnSale(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
  };

  useEffect(() => {
    getProductOnSale();
  }, []);

  return (
    <Box m={5}>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#724cf9",
          height: "100px",
          width: "100%",
        }}
      >
        <p
          style={{ color: "white", fontFamily: "oooh baby", fontSize: "36px" }}
        >
          DESCUENTOS IMPERDIBLES
        </p>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={ofertas}
          alt="ofertas"
          style={{ width: "60%", height: "600px" }}
        ></img>
      </Box>

      <Box m={5}>
        <Grid container spacing={2}>
          {productsOnSale.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <ItemList
                  product={product}
                  key={product.id}
                  onProductAdded={onProductAdded}
                  darkMode={darkMode}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductsToShowOnSale;
