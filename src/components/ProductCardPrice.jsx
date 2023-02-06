import React from "react";
import useAccountant from "./hooks/useAccountant";
import ItemCount from "./ItemCount";
import AddToCart from "./AddToCart";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ProductCardPrice = ({ onProductAdded }) => {
  const { increase, decrease, count } = useAccountant(1);
  return (
    <>
      <Box m={2}>
        <Typography
          variant="p"
          //color="text.secondary"
          sx={{ justifyContent: "center", display: "flex" }}
        >
          {`$${1500 * count}`}
        </Typography>
      </Box>
      <CardActions sx={{ justifyContent: "center", display: "flex" }}>
        <ItemCount
          increase={() => {
            increase();
          }}
          decrease={() => {
            decrease();
          }}
          count={count}
          stock={15}
        />
        <AddToCart count={count} onProductAdded={onProductAdded} />
      </CardActions>
    </>
  );
};

export default ProductCardPrice;
