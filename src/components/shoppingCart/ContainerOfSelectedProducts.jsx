import * as React from "react";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";

import { Card, CardMedia, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import CreditCardBox from "../shoppingCart/CreditCardBox";
import DeleteBtnOfSelectedProduct from "../shoppingCart/DeleteBtnOfSelectedProduct";
import TotalPriceOfProducts from "../shoppingCart/TotalPriceOfProducts";
import BtnGoToPay from "../shoppingCart/BtnGoToPay";

export default function ContainerOfSelectedProducts() {
  const { cartDetails, getTotal } = useContext(CardContext);

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
            color: "#564592",
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
            backgroundColor: "",
          }}
        >
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
                    backgroundColor: "#EDF67D",
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
                      <p style={{ fontFamily: "Montserrat" }}>
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
                      {console.log(detail.product.sale)}
                      {detail.product.sale ? (
                        <p
                          style={{
                            fontWeight: "bold",
                            fontFamily: "Montserrat",
                          }}
                        >
                          ${" "}
                          {(detail.product.price -
                            (detail.product.price * detail.product.offerPrice) /
                              100) *
                            detail.qty}
                          <Divider />- {detail.product.offerPrice} %
                        </p>
                      ) : (
                        <p
                          style={{
                            fontWeight: "bold",
                            fontFamily: "Montserrat",
                          }}
                        >
                          $ {detail.product.price * detail.qty}
                        </p>
                      )}
                    </Box>
                  </Grid>
                  <DeleteBtnOfSelectedProduct />
                </Card>
              </Box>
            );
          })}
        </Card>
      )}

      <TotalPriceOfProducts getTotal={getTotal} />
      <CreditCardBox />
      <BtnGoToPay />
    </Box>
  );
}
