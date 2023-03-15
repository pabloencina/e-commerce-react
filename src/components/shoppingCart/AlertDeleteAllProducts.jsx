import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { CardContext } from "../../context/CardContext";
import useHoverButtons from "../hooks/useHoverButtons";

const AlertDeleteAllProducts = () => {
  const [open, setOpen] = React.useState(false);
  const {
    buttonVerDetalle,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
  } = useHoverButtons(false);

  const { onClearCart } = React.useContext(CardContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        title="Eliminar todos los productos"
        style={buttonVerDetalle}
        sx={{ width: "200px", height: "45px" }}
        onMouseEnter={handleMouseEnterVerDetalle}
        onMouseLeave={handleMouseLeaveVerDetalle}
        onClick={handleClickOpen}
      >
        Vaciar carrito
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Está seguro que desea eliminar todos los productos del carrito de
            compra?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={onClearCart} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDeleteAllProducts;
