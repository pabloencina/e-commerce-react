import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@mui/material";

const CartWidget = ({ count }) => {
  return (
    <>
      <Button variant="contained">
        <ShoppingCartOutlinedIcon />
        <span>{count}</span>
      </Button>
    </>
  );
};

export default CartWidget;
