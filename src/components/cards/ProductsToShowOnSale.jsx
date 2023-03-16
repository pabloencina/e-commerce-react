import { Grid } from "@mui/material";
import { Box } from "@mui/system";
//import dataArray from "../ejemplo";
import ItemList from "./ItemList";
import ofertas from "../images/ImagesSale/ofertas.jpg";
import oferta1 from "../images/ImagesSale/oferta1.jpg";
import oferta2 from "../images/ImagesSale/oferta2.jpg";
import oferta3 from "../images/ImagesSale/oferta3.jpg";
import oferta4 from "../images/ImagesSale/oferta4.jpg";
import oferta5 from "../images/ImagesSale/oferta5.jpg";
import { CardContext } from "../../context/CardContext";
import { useContext } from "react";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
import Spinner from "../Spinner";
import "../../cssStyles/transition.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const ProductsToShowOnSale = ({ darkMode }) => {
  const words = [
    "DESCUENTOS IMPERDIBLES ! ! ! ",
    "NO TE LO PIERDAS ! ! !",
    "10%  15%  25% LIQUIDACIÓN ! ! !",
    "CON LA COMPRA DE 3 O MÁS PRODUCTOS OBTÉN BENEFICIOS ",
    "AVERÍGUALO ! ! !",
  ];

  const imagesSale = [ofertas, oferta1, oferta2, oferta3, oferta4, oferta5];
  const [paragraphCounter, setParagraphCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setParagraphCounter((currentValue) => {
        if (currentValue + 1 === words.length) {
          return 0;
        }
        return currentValue + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [productsOnSale, setProductsOnSale] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getProductOnSale();
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
          backgroundColor: darkMode ? "#724cf9" : "white",
          height: "100px",
          width: "100%",
        }}
      >
        <SwitchTransition>
          <CSSTransition
            key={words[paragraphCounter]}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="fade"
          >
            <p
              style={{
                color: darkMode ? "white" : "black",
                fontFamily: "Roboto",
                fontWeight: "500",
                fontSize: "36px",
              }}
            >
              {`${words[paragraphCounter]}`}
            </p>
          </CSSTransition>
        </SwitchTransition>
      </Box>
      <Box
        m={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SwitchTransition>
          <CSSTransition
            key={words[paragraphCounter]}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="fade"
          >
            <img
              src={imagesSale[paragraphCounter]}
              alt="ofertas"
              style={{ width: "60%", height: "600px" }}
            ></img>
          </CSSTransition>
        </SwitchTransition>
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
