import React from "react";
import useAccountant from "../hooks/useAccountant";
import ItemCount from "./ItemCount";
import AddToCart from "./AddToCart";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

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
      <Box m={2} sx={{ justifyContent: "center", display: "flex" }}>
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
      </Box>

      <Box m={2} sx={{ justifyContent: "center", display: "flex" }}>
        {" "}
        <AddToCart count={count} onProductAdded={onProductAdded} />
      </Box>
      <Box m={2} style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{
            backgroundColor: "#564592",
            color: "white",
          }}
        >
          <ReplyOutlinedIcon />
        </Button>
      </Box>
    </>
  );
};

export default ProductCardPrice;
