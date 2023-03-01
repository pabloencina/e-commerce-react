import { Button } from "@mui/material";
import React from "react";

const ItemCount = ({ increase, decrease, count, stock, darkMode }) => {
  return (
    <>
      <Button
        title="Disminuir cantidad"
        disabled={count <= 1}
        onClick={decrease}
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
        onClick={increase}
        style={{
          color: darkMode ? "#564592" : "white",
        }}
      >
        +{" "}
      </Button>
    </>
  );
};

export default ItemCount;
