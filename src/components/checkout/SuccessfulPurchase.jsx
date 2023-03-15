import { Alert, Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import useHoverButtons from "../hooks/useHoverButtons";
import compraExitosa from "../images/compraExitosa.jpg";
import { CardContext } from "../../context/CardContext";

const SuccessfulPurchase = () => {
  const { onClearCart } = useContext(CardContext);

  const {
    buttonVerDetalle,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
  } = useHoverButtons(false);

  const { orderId } = useParams();

  return (
    <Box>
      <Box m={5}>
        {orderId ? (
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Alert
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>
                Gracias por tu compra, el código de seguimiento de la compra es:
                <b>{orderId}</b>.
              </p>
            </Alert>
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Box
        m={5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={compraExitosa}
          alt="error404"
          style={{ width: "70%", height: "500px" }}
        ></img>
      </Box>
      <Box m={2} style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            onClick={onClearCart}
            sx={{
              width: "300px",
              height: "45px",
              backgroundColor: "#564592",
              color: "white",
              fontFamily: "Montserrat",
            }}
            style={buttonVerDetalle}
            onMouseEnter={handleMouseEnterVerDetalle}
            onMouseLeave={handleMouseLeaveVerDetalle}
          >
            <ReplyOutlinedIcon />
            Volver a la página principal
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default SuccessfulPurchase;
