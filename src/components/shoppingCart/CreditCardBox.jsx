import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import americanExpress from "../images/americanExpress.png";
import masterCard from "../images/masterCard.png";
import visa from "../images/visa.png";

const CreditCardBox = () => {
  return (
    <Box>
      <Box m={5}>
        <p style={{ color: "black" }}>OPCIONES DE PAGO</p>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "180px",
        }}
      >
        <Grid item xs={12} sm={6} md={4} sx={{ flexDirection: "row" }}>
          <Box
            m={3}
            sx={{
              //width: "170px",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              //boxSizing: "border-box",
            }}
          >
            {" "}
            <img
              src={americanExpress}
              alt="tarjeta American Express"
              style={{ width: "130px", height: "100px" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ flexDirection: "row" }}>
          <Box
            m={3}
            sx={{
              //width: "170px",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              //boxSizing: "border-box",
            }}
          >
            <img
              src={masterCard}
              alt="tarjeta masterCard"
              style={{ width: "130px", height: "100px" }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4} sx={{ flexDirection: "row" }}>
          <Box
            m={3}
            sx={{
              //width: "170px",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              //boxSizing: "border-box",
            }}
          >
            <img
              src={visa}
              alt="tarjeta visa"
              style={{ width: "130px", height: "100px" }}
            />
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreditCardBox;
