import { Button } from "@mui/material";
import React from "react";

const ItemCount = ({ increase, decrease, count, stock }) => {
  return (
    <>
      <Button
        disabled={count <= 1}
        onClick={decrease}
        style={{
          color: "#564592",
        }}
      >
        -
      </Button>
      {count}
      <Button
        disabled={count >= stock}
        onClick={increase}
        style={{
          color: "#564592",
        }}
      >
        +
      </Button>
    </>
  );
};

export default ItemCount;
