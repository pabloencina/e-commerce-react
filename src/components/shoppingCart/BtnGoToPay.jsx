import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import useHoverButtons from "../hooks/useHoverButtons";

const BtnGoToPay = () => {
  const {
    buttonVerDetalle,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
  } = useHoverButtons(false);
  return (
    <Box
      m={3}
      sx={{
        //width: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        sx={{ width: "200px", height: "45px", fontFamily: "Montserrat" }}
        style={buttonVerDetalle}
        onMouseEnter={handleMouseEnterVerDetalle}
        onMouseLeave={handleMouseLeaveVerDetalle}
      >
        Finalizar Compra
        <ArrowRightAltIcon />
      </Button>
    </Box>
  );
};

export default BtnGoToPay;
