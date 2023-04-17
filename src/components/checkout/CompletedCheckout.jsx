import { Box } from "@mui/system";
import React from "react";
import FormCheckout from "./FormCheckout";
import ProductsCheckout from "./ProductsCheckout";

const CompletedCheckout = ({ darkMode }) => {
  return (
    <Box
      m={5}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormCheckout darkMode={darkMode} />
      </Box>

      <Box style={{ width: "60%" }}>
        <Box>
          <ProductsCheckout darkMode={darkMode} />
        </Box>
      </Box>
    </Box>
  );
};

export default CompletedCheckout;
