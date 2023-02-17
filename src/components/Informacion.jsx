import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
//import logoWtp from  ""
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Información = () => {
  return (
    <Typography component="div" variant="body1">
      <Box
        sx={{ color: "info.main" }}
        style={{
          display: "flex",
          justifyContent: "center",
          height: "50px",
          alignItems: "center",
          color: "#724cf9",
          fontFamily: "oooh baby",
          backgroundColor: "white",
          fontSize: "30px",
        }}
      >
        Consulte por clases de yoga, meditación guiada y coaching nutricional.
        <Button>
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{
              color: "green",
              fontSize: "30px",
            }}
          />
        </Button>
      </Box>
    </Typography>
  );
};

export default Información;
