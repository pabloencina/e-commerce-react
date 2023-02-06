import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { Box } from "@mui/system";

export default function AddToCart({ count, onProductAdded, stock }) {
  const [open, setOpen] = React.useState(false);

  const messageProducto = `Se agrego ${count} producto al carrito`;
  const messageProductos = `Se agregaron ${count} productos al carrito`;

  const handleClick = () => {
    setOpen(true);
    onProductAdded(count);
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
        {" "}
        <Button
          disabled={stock <= 0}
          onClick={handleClick}
          style={{
            backgroundColor: "#564592",
            color: "white",
          }}
        >
          Agregar al carrito
        </Button>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={count === 1 ? messageProducto : messageProductos}
        action={action}
      />
    </>
  );
}
