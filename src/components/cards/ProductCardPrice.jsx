import React, { useContext } from "react";
import useAccountant from "../hooks/useAccountant";
import ItemCount from "./ItemCount";
import AddToCart from "./AddToCart";
import { Box } from "@mui/system";
import { Alert, Button, IconButton, Snackbar, Typography } from "@mui/material";
import { CardContext } from "../../context/CardContext";
import { Close } from "@mui/icons-material";

const ProductCardPrice = ({ product, darkMode }) => {
  const { increase, decrease, count } = useAccountant(1);
  const { price, offerPrice, stock, sale, name } = product;
  const { decrementStock, getStock } = useContext(CardContext);

  const [addToCartOpen, setAddToCartOpen] = React.useState(false);
  const messageProduct = `Se agrego ${count} producto al carrito`;
  const messageProducts = `Se agregaron ${count} productos al carrito`;
  const [outOfStockOpen, setOutOfStockOpen] = React.useState(false);
  const outOfStockMessage = "No hay más productos en el stock";

  const { onProductAdded } = useContext(CardContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOutOfStockOpen(false);
    setAddToCartOpen(false);
  };
  // console.log(onProductAdded);
  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={handleClose}>
        CLOSE
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const handleProductAdded = () => {
    console.log(getStock(product));
    if (getStock(product) >= count) {
      onProductAdded(product, count);
      decrementStock(product, count);
      setAddToCartOpen(true);
      // MOSTRAR SNACKBAR OK
    } else {
      console.log("NO SE PUEDE AGREGAR PORQUE NO HAY STOCK");
      // MOSTRAR SNACKBAR NO HAY MAS STOCK
      setOutOfStockOpen(true);
    }
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
                color: darkMode ? "black" : "white",
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
                color: darkMode ? "#724cf9" : "white",
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
                color: darkMode ? "red" : "white",
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
          product={product}
          increase={() => {
            increase();
          }}
          decrease={() => {
            decrease();
          }}
          count={count}
          stock={stock}
          darkMode={darkMode}
        />
      </Box>
      <Box m={2} sx={{ justifyContent: "center", display: "flex" }}>
        {" "}
        <AddToCart
          count={count}
          handleProductAdded={handleProductAdded}
          stock={stock}
          product={product}
        />
      </Box>
      <Snackbar
        open={addToCartOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={count === 1 ? messageProduct : messageProducts}
        action={action}
      />
      <Snackbar
        open={outOfStockOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message={outOfStockMessage}
        action={action}
      />
      ;
    </>
  );
};

export default ProductCardPrice;
