import * as React from "react";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";

import { Button, Card, CardMedia, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import CreditCardBox from "../shoppingCart/CreditCardBox";
import DeleteBtnOfSelectedProduct from "../shoppingCart/DeleteBtnOfSelectedProduct";
import TotalPriceOfProducts from "../shoppingCart/TotalPriceOfProducts";
import BtnGoToPay from "../shoppingCart/BtnGoToPay";
import useHoverButtons from "../hooks/useHoverButtons";

export default function ContainerOfSelectedProducts({ darkMode }) {
  const { cartDetails, getTotal, onClearCart } = useContext(CardContext);
  const {
    buttonVerDetalle,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
  } = useHoverButtons(false);
  return (
    <Box m={5} style={{}}>
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
            color: darkMode ? "#564592" : "white",
            fontSize: "30PX",
            fontWeight: "bold",
            fontFamily: "Montserrat",
          }}
        >
          TU CARRITO
        </p>
      </Box>
      <Box
        m={5}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          height: "80px",
        }}
      >
        <p
          style={{
            color: darkMode ? "#564592" : "white",
            fontSize: "20PX",
            fontWeight: "bold",
            fontFamily: "Montserrat",
          }}
        >
          Resumen del pedido
        </p>
      </Box>
      {cartDetails.length === 0 ? (
        <Box
          m={5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            backgroundColor: "#724cf9",
            width: "70%",
          }}
        >
          <p
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "Montserrat",
            }}
          >
            No hay productos seleccionados
          </p>
        </Box>
      ) : (
        <Card
          sx={{
            width: "80%",
            m: 5,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: darkMode ? "white" : "#301E67",
          }}
        >
          <Box style={{ display: "flex", justifyContent: "end" }} m={3}>
            <Button
              style={buttonVerDetalle}
              sx={{ width: "200px", height: "45px" }}
              onMouseEnter={handleMouseEnterVerDetalle}
              onMouseLeave={handleMouseLeaveVerDetalle}
              onClick={onClearCart}
            >
              Vaciar carrito
            </Button>
          </Box>
          {cartDetails.map((detail) => {
            return (
              <Box m={3}>
                <Card
                  style={{
                    m: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    height: "250px",
                    backgroundColor: darkMode ? "#EDF67D" : "#564592",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: "250px",
                      width: "300px",
                      boxSizing: "border-box",
                    }}
                    image={detail.product.image}
                    title="card indumentaria"
                  >
                    {detail.product.sale ? (
                      <Box
                        style={{
                          marginTop: "400px",
                          marginLeft: "70%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#EDF67D",
                          fontFamily: "Montserrat",
                        }}
                      >
                        <p style={{ fontFamily: "Montserrat" }}>
                          {"- " + detail.product.offerPrice + " %"}
                        </p>
                      </Box>
                    ) : (
                      ""
                    )}
                  </CardMedia>

                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    sx={{ flexDirection: "column" }}
                  >
                    <Box
                      m={3}
                      sx={{
                        width: "100px",
                        display: "flex",
                        justifyContent: "center",
                        boxSizing: "border-box",
                        alignItems: "center",
                        //backgroundColor: "red",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Montserrat",
                          color: darkMode ? "black" : "white",
                        }}
                      >
                        {detail.qty}
                        {detail.qty === 1 ? " producto" : " productos"}
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
                      m={3}
                      sx={{
                        width: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Montserrat",
                          color: darkMode ? "black" : "white",
                        }}
                      >
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
                      {detail.product.sale ? (
                        <p
                          style={{
                            fontWeight: "bold",
                            fontFamily: "Montserrat",
                            color: darkMode ? "black" : "white",
                          }}
                        >
                          ${" "}
                          {(detail.product.price -
                            (detail.product.price * detail.product.offerPrice) /
                              100) *
                            detail.qty}
                          <Divider
                            sx={{ color: darkMode ? "black" : "white" }}
                          />
                          <p
                            style={{
                              color: darkMode ? "black" : "white",
                              fontSize: "10px",
                            }}
                          >
                            aplicado el {detail.product.offerPrice} % de
                            descuento
                          </p>
                        </p>
                      ) : (
                        <p
                          style={{
                            fontWeight: "bold",
                            fontFamily: "Montserrat",
                            color: darkMode ? "black" : "white",
                          }}
                        >
                          $ {detail.product.price * detail.qty}
                        </p>
                      )}
                    </Box>
                  </Grid>
                  <DeleteBtnOfSelectedProduct
                    productId={detail.product.id}
                    darkMode={darkMode}
                  />
                </Card>
              </Box>
            );
          })}
        </Card>
      )}
      <TotalPriceOfProducts getTotal={getTotal} darkMode={darkMode} />
      <CreditCardBox darkMode={darkMode} />
      <BtnGoToPay />
    </Box>
  );
}
