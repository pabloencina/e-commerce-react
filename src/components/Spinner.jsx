import { Box } from "@mui/system";
import React from "react";
import { CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        height: "400px",
        width: "100%",
        alignItems: "center",
      }}
    >
      <CircularProgress sx={{ color: "#EDF67D" }} />
    </Box>
  );
};

export default Spinner;
