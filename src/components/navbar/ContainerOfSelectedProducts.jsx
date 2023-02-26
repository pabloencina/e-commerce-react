// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { useContext } from "react";
// import { CardContext } from "../../context/CardContext";
// import ShoppingCartCard from "../cards/ShoppingCartCard";

// const style = {
//   position: "absolute",
//   top: "40%",
//   left: "80%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "3px solid #564592",
//   boxShadow: 24,
//   p: 4,
// };

// export default function ModalCartWidget() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const { count } = useContext(CardContext);

//   return (
//     <div>
//       <Button
//         onClick={handleOpen}
//         style={{
//           backgroundColor: "#564592",
//         }}
//         variant="contaitextned"
//       >
//         <ShoppingCartOutlinedIcon />
//         <span>{count}</span>
//       </Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={{ style }}>
//           <Typography
//             id="modal-modal-title"
//             variant="h6"
//             component="h2"
//             sx={{ fontFamily: "Montserrat" }}
//           >
//             <ShoppingCartCard />
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Grid } from "@mui/material";
import { useState } from "react";
import dataArray from "../ejemplo";
import { Box } from "@mui/system";

export default function ContainerOfSelectedProducts() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const { count } = useContext(CardContext);
  const [items, setItems] = useState([]);

  const getAllCard = () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataArray);
      }, 2000);
    });
    promise.then((request) => {
      setItems(request);
    });
  };

  React.useEffect(() => {
    getAllCard();
  }, []);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button
        onClick={handleClickOpen("body")}
        style={{
          backgroundColor: "#564592",
        }}
        variant="contaitextned"
      >
        <ShoppingCartOutlinedIcon />
        <span>{count}</span>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        {/* <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle> */}
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80px",
              }}
            >
              <p>Tu Carrito</p>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                height: "80px",
              }}
            >
              <p>Resumen del pedido</p>
            </Box>
            {items.map((product) => {
              return (
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80px",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{ flexDirection: "row" }}
                  >
                    <Box
                      sx={{
                        width: "100px",
                        display: "flex",
                        justifyContent: "start",
                        boxSizing: "border-box",
                      }}
                    >
                      {count} producto
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{ flexDirection: "row" }}
                  >
                    <Box
                      sx={{
                        width: "100px",
                        display: "flex",
                        justifyContent: "start",
                        boxSizing: "border-box",
                      }}
                    >
                      {product.name}
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{ flexDirection: "row" }}
                  >
                    <Box
                      sx={{
                        width: "100px",
                        display: "flex",
                        justifyContent: "end",
                        flexDirection: "row",
                        boxSizing: "border-box",
                      }}
                    >
                      $ {product.price}
                    </Box>
                  </Grid>
                </Box>
              );
            })}

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} sm={6} md={4} sx={{ flexDirection: "row" }}>
                {" "}
                <Box
                  sx={{
                    width: "200px",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <p>Total</p>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4} sx={{ flexDirection: "row" }}>
                {" "}
                <Box
                  sx={{
                    width: "100px",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    //boxSizing: "border-box",
                  }}
                >
                  <p>$ 10000</p>
                </Box>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
