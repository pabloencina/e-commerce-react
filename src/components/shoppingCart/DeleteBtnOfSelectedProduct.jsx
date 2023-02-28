import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CardContext } from "../../context/CardContext";

const DeleteBtnOfSelectedProduct = ({ productId, darkMode }) => {
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
          title="Eliminar producto"
          onClick={() => {
            onProductRemove(productId);
          }}
          sx={{ color: darkMode ? "#724cf9" : "white" }}
        >
          <DeleteForeverIcon sx={{ width: "40px", height: "40px" }} />
        </Button>
      </Box>
    </Grid>
  );
};

export default DeleteBtnOfSelectedProduct;
