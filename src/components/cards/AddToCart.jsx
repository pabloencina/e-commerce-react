import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import useHoverButtons from "../hooks/useHoverButtons";
import useStock from "../hooks/useStock";
//import { useContext } from "react";
//import { CardContext } from "../../context/CardContext";

export default function AddToCart({ count, stock, handleProductAdded }) {
  const [open, setOpen] = React.useState(false);
  const { decrementCounter } = useStock();
  const messageProduct = `Se agrego ${count} producto al carrito`;
  const messageProducts = `Se agregaron ${count} productos al carrito`;
  const {
    buttonVerDetalle,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
  } = useHoverButtons(false);

  const handleClick = () => {
    setOpen(true);
    handleProductAdded();
    decrementCounter();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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

  return (
    <>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ width: "200px", height: "45px" }}
          disabled={stock <= 0}
          onClick={handleClick}
          style={buttonVerDetalle}
          onMouseEnter={handleMouseEnterVerDetalle}
          onMouseLeave={handleMouseLeaveVerDetalle}
        >
          <p style={{ fontFamily: "Montserrat" }}>Agregar al carrito</p>
        </Button>
      </Box>

      {}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={count === 1 ? messageProduct : messageProducts}
        action={action}
      />
    </>
  );
}
