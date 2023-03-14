import { Box, Button } from "@mui/material";
import React from "react";
import useHoverButtons from "../hooks/useHoverButtons";

const BtnGeneratePurchase = ({ generateOrder, orderId }) => {
  //const { orderId } = useParams();
  console.log(orderId);
  //   const generatePurchase = () => {};
  const {
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
    buttonVerDetalle,
  } = useHoverButtons(false);

  return (
    <Box m={2} style={{ display: "flex", justifyContent: "center" }}>
      <Button
        onClick={generateOrder}
        sx={{
          width: "300px",
          height: "45px",
          backgroundColor: "#564592",
        }}
        style={buttonVerDetalle}
        onMouseEnter={handleMouseEnterVerDetalle}
        onMouseLeave={handleMouseLeaveVerDetalle}
      >
        Generar Compra
      </Button>
    </Box>
  );
};

export default BtnGeneratePurchase;
