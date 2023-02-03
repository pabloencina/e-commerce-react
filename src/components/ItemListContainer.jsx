import { Alert } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <Box m={3}>
      <Alert
        sx={{ display: "flex", justifyContent: "center" }}
        severity="error"
      >
        {greeting}
      </Alert>
    </Box>
  );
};

export default ItemListContainer;
