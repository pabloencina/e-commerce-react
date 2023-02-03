import { Button } from "@mui/material";
import React from "react";

const ItemCount = ({ increase, decrease, count, stock }) => {
  return (
    <>
      <Button disabled={count <= 1} onClick={decrease}>
        -
      </Button>
      {count}
      <Button disabled={count >= stock} onClick={increase}>
        +
      </Button>
    </>
  );
};

export default ItemCount;
