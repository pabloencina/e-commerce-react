import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { CardContext } from "../../context/CardContext";
import { useParams } from "react-router-dom";

const DeleteBtnOfSelectedProduct = ({ productId }) => {
  const { onProductRemove } = useContext(CardContext);
  return (
    <Grid item xs={12} sm={6} md={4} sx={{ flexDirection: "row" }}>
      <Box
        sx={{
          width: "100px",
          display: "flex",
          justifyContent: "end",
          flexDirection: "row",
          boxSizing: "border-box",
        }}
      >
        <Button
          onClick={() => {
            onProductRemove(productId);
          }}
          sx={{ color: "#724cf9" }}
        >
          <ClearIcon />
        </Button>
      </Box>
    </Grid>
  );
};

export default DeleteBtnOfSelectedProduct;
