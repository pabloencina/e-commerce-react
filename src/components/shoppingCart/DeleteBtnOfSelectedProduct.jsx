import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import AlertDeleteProduct from "./AlertDeleteProduct";

const DeleteBtnOfSelectedProduct = ({ productId, darkMode }) => {
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
        <AlertDeleteProduct darkMode={darkMode} productId={productId} />
      </Box>
    </Grid>
  );
};

export default DeleteBtnOfSelectedProduct;
