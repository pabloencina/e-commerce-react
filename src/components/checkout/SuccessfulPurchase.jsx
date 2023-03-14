import { Alert, Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const SuccessfulPurchase = () => {
  const { orderId } = useParams();

  return (
    <Box m={5}>
      {orderId ? (
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <Alert style={{ width: "50%" }}>
            Gracias por tu compra, el código de seguimiento de la compra es:
            <b>{orderId}</b>.
          </Alert>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default SuccessfulPurchase;
