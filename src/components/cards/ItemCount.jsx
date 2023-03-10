import { Button } from "@mui/material";
import React from "react";
//import { useState } from "react";

const ItemCount = ({ increase, decrease, count, stock, darkMode }) => {
  // const incrementStock = () =>{
  //   if(count < itemStock){
  //     setItemStock(count + 1)
  //   }
  // }

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
        disabled={stock <= count}
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
