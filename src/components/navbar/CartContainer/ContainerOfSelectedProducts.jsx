import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useContext } from "react";
import { CardContext } from "../../../context/CardContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import CreditCardBox from "./CreditCardBox";
import DeleteBtnOfSelectedProduct from "./DeleteBtnOfSelectedProduct";
import TotalPriceOfProducts from "./TotalPriceOfProducts";
import BtnGoToPay from "./BtnGoToPay";
import useCart from "../../hooks/useCart";

export default function ContainerOfSelectedProducts() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const { count } = useContext(CardContext);
  // const [items, setItems] = useState([]);

  // const getAllCard = () => {
  //   const promise = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(dataArray);
  //     }, 2000);
  //   });
  //   promise.then((request) => {
  //     setItems(request);
  //   });
  // };

  // React.useEffect(() => {
  //   getAllCard();
  // }, []);
  const { cartDetails } = useContext(CardContext);

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
              <p
                style={{
                  color: "#564592",
                  fontSize: "30PX",
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                }}
              >
                TU CARRITO
              </p>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                height: "80px",
              }}
            >
              <p
                style={{
                  color: "#564592",
                  fontSize: "20PX",
                  fontWeight: "bold",
                  fontFamily: "Montserrat",
                }}
              >
                Resumen del pedido
              </p>
            </Box>
            {cartDetails.map((detail) => {
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
                      <p style={{ fontFamily: "Montserrat" }}>
                        {detail.qty} producto
                      </p>
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
                      <p style={{ fontFamily: "Montserrat" }}>
                        {detail.product.name}
                      </p>
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
                      <p
                        style={{ fontWeight: "bold", fontFamily: "Montserrat" }}
                      >
                        $ {detail.product.price}
                      </p>
                    </Box>
                  </Grid>
                  <DeleteBtnOfSelectedProduct />
                </Box>
              );
            })}
            <TotalPriceOfProducts />
            <CreditCardBox />
            <BtnGoToPay />
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
