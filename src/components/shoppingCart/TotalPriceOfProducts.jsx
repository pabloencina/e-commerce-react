import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const TotalPriceOfProducts = () => {
  return (
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
            //width: "200px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "#724cf9",
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "Montserrat",
            }}
          >
            Total
          </p>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} sx={{ flexDirection: "row" }}>
        {" "}
        <Box
          sx={{
            width: "170px",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            //boxSizing: "border-box",
          }}
        >
          <p
            style={{
              color: "#724cf9",
              fontWeight: "bold",
              fontSize: "20px",
              fontFamily: "Montserrat",
            }}
          >
            $ 10000
          </p>
        </Box>
      </Grid>
    </Box>
  );
};

export default TotalPriceOfProducts;
