import { Button } from "@mui/material";
import React from "react";

const ItemCount = ({ increase, decrease, count }) => {
  return (
    <>
      <Button onClick={decrease}>-</Button>
      {count}
      <Button onClick={increase}>+</Button>
    </>
  );
};

export default ItemCount;
