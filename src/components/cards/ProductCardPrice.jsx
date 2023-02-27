import React, { useContext } from "react";
import useAccountant from "../hooks/useAccountant";
import ItemCount from "./ItemCount";
import AddToCart from "./AddToCart";
import { Box } from "@mui/system";
import { Alert, Typography } from "@mui/material";
import { CardContext } from "../../context/CardContext";

const ProductCardPrice = ({ product }) => {
  const { increase, decrease, count } = useAccountant(1);
  const { price, offerPrice, stock, sale, name } = product;

  const { onProductAdded } = useContext(CardContext);
  // console.log(onProductAdded);

  const handleProductAdded = () => {
    onProductAdded(product, count);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",
          marginTop: "-50px",
          height: "100px",
        }}
      >
        {stock === count ? (
          <Alert
            severity="error"
            style={{
              fontFamily: "Montserrat",
              height: 80,
            }}
          >
            No hay más stock de {name}
          </Alert>
        ) : (
          ""
        )}
      </Box>

      <Box sx={{ justifyContent: "center", display: "flex" }}>
        <Box m={2}>
          {sale ? (
            <Typography
              variant="p"
              sx={{
                justifyContent: "center",
                display: "flex",
                textDecoration: "line-through",
              }}
            >
              {`$  ${price}`}
            </Typography>
          ) : (
            <Typography
              variant="p"
              sx={{
                justifyContent: "center",
                display: "flex",
                color: "#724cf9",
                fontWeight: "bold",
              }}
            >
              {`$  ${price * count}`}
            </Typography>
          )}
        </Box>

        {sale ? (
          <Box m={2}>
            <Typography
              variant="p"
              color="text.secondary"
              sx={{
                justifyContent: "center",
                display: "flex",
                color: "red",
                fontWeight: "bold",
              }}
            >
              {`$  ${(price - (price * offerPrice) / 100) * count}`}
            </Typography>
          </Box>
        ) : (
          ""
        )}
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
          stock={stock}
        />
      </Box>

      <Box m={2} sx={{ justifyContent: "center", display: "flex" }}>
        {" "}
        <AddToCart count={count} handleProductAdded={handleProductAdded} />
      </Box>
    </>
  );
};

export default ProductCardPrice;
