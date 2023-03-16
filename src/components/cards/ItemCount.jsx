import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useEffect } from "react";
import { CardContext } from "../../context/CardContext";

const ItemCount = ({ increase, decrease, count, stock, product, darkMode }) => {
  const { getStock, decrementStock } = useContext(CardContext);

  // useEffect(() => {
  //   decrementStock(product, 1);
  // }, []);

  return (
    <>
      <Button
        title="Disminuir cantidad"
        disabled={count <= 1}
        onClick={() => {
          decrease();
          //decrementStock(product, -1);
        }}
        style={{
          color: darkMode ? "#564592" : "white",
        }}
      >
        -
      </Button>
      <p
        style={{
          color: darkMode ? "#564592" : "white",
        }}
      >
        {count}{" "}
      </p>
      <Button
        title="Aumentar cantidad"
        disabled={count >= stock}
        onClick={() => {
          increase();
          //decrementStock(product, 1);
        }}
        style={{
          color: darkMode ? "#564592" : "white",
        }}
      >
        +
      </Button>
    </>
  );
};

export default ItemCount;
