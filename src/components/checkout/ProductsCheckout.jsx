import { Card, CardMedia, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import TotalPriceOfProducts from "../shoppingCart/TotalPriceOfProducts";

const ProductsCheckout = ({ darkMode }) => {
  const { cartDetails, getTotal } = useContext(CardContext);
  return (
    <Box>
      <Card
        sx={{
          width: "100%",

          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: darkMode ? "white" : "#301E67",
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
                  height: "100px",
                  backgroundColor: darkMode ? "#EDF67D" : "#564592",
                }}
              >
                <CardMedia
                  sx={{
                    height: "250px",
                    width: "200px",
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

                <Grid item xs={12} sm={6} md={4} sx={{ flexDirection: "row" }}>
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
                <Grid item xs={12} sm={6} md={4} sx={{ flexDirection: "row" }}>
                  <Box
                    m={2}
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
                        <Divider sx={{ color: darkMode ? "black" : "white" }} />
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
              </Card>
            </Box>
          );
        })}
      </Card>
      <TotalPriceOfProducts getTotal={getTotal} darkMode={darkMode} />
    </Box>
  );
};

export default ProductsCheckout;
