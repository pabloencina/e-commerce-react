import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
//import ProductCardById from "../cards/ProductCardById";

const style = {
  position: "absolute",
  top: "40%",
  left: "80%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "3px solid #564592",
  boxShadow: 24,
  p: 4,
};

export default function ModalCartWidget({ count }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          backgroundColor: "#564592",
        }}
        variant="contaitextned"
      >
        <ShoppingCartOutlinedIcon />
        <span>{count}</span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontFamily: "Montserrat" }}
          >
            Text in a modal
          </Typography>
          {/* <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontFamily: " Hind Madurai" }}
          >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
