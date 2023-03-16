import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import useHoverButtons from "../hooks/useHoverButtons";

export default function AddToCart({ handleProductAdded }) {
  const {
    buttonVerDetalle,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
  } = useHoverButtons(false);

  const handleClick = () => {
    handleProductAdded();
  };

  return (
    <>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ width: "200px", height: "45px" }}
          // disabled={getStock(product) <= 0}
          onClick={handleClick}
          style={buttonVerDetalle}
          onMouseEnter={handleMouseEnterVerDetalle}
          onMouseLeave={handleMouseLeaveVerDetalle}
        >
          <p style={{ fontFamily: "Montserrat" }}>Agregar al carrito</p>
        </Button>
      </Box>
    </>
  );
}
