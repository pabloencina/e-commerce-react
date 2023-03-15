import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { CardContext } from "../../context/CardContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const AlertDeleteProduct = ({ productId, darkMode }) => {
  const [open, setOpen] = React.useState(false);

  const { onProductRemove } = React.useContext(CardContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        title="Eliminar producto"
        onClick={handleClickOpen}
        sx={{ color: darkMode ? "#724cf9" : "white" }}
      >
        <DeleteForeverIcon sx={{ width: "40px", height: "40px" }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Esta seguro que desea eliminar el producto <b>{}</b> del carrito de
            compras?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button
            onClick={() => {
              onProductRemove(productId);
            }}
            autoFocus
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDeleteProduct;

// title="Eliminar producto"
//         onClick={() => {
//           onProductRemove(productId);
//         }}
//         sx={{ color: darkMode ? "#724cf9" : "white" }}
