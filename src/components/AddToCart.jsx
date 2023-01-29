import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
//import IconButton from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function AddToCart({ count }) {
  const [open, setOpen] = React.useState(false);

  const messageProducto = `Usted tiene ${count} producto en el carrito`;
  const messageProductos = `Usted tiene ${count} productos en el carrito`;

  const addCount = () => {
    return count;
  };

  const handleClick = () => {
    setOpen(true);
    addCount();
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
    <div>
      <Button onClick={handleClick}>Add to cart</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={count === 1 ? messageProducto : messageProductos}
        action={action}
      />
    </div>
  );
}
