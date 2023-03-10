import { Grid } from "@mui/material";
import {
  //collection,
  doc,
  getDoc,
  //getDocs,
  // query,
  // where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import Spinner from "../Spinner";
import ProductCardById from "./ProductCardById";

const ProductCardByIdItem = ({ darkMode }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();
  const getProductById = () => {
    // const productCollection = collection(db, "Productos");
    // const q = query(productCollection, where("id", "==", productId));
    // getDocs(q).then((snapshot) => {
    //   if (snapshot.size === 0) {
    //     console.log("No results");
    //   }
    //   setProduct(snapshot.docs.map((doc) => ({ id: doc.id })));
    // });

    const ref = doc(db, "Productos", productId);

    getDoc(ref)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
          setIsLoading(false);
        }
      })
      .catch((err) => console.log(err.msg));
  };

  useEffect(() => {
    getProductById();
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <Grid>
      <ProductCardById product={product} darkMode={darkMode} />
    </Grid>
  );
};

export default ProductCardByIdItem;
