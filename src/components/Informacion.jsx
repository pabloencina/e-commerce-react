import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
//import logoWtp from  ""
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import "../cssStyles/transition.css";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Información = () => {
  const words = [
    " CLASES DE YOGA",
    " MEDITACION GUIADA",
    " COACHING NUTRICIONAL",
  ];

  //const [paragraph, setParagraph] = useState("");
  const [paragraphCounter, setParagraphCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setParagraphCounter((currentValue) => {
        if (currentValue + 1 === words.length) {
          return 0;
        }
        return currentValue + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
          fontFamily: "Roboto",
          fontWeight: "300",
          backgroundColor: "white",
          fontSize: "25px",
        }}
      >
        Consulte por{" "}
        <SwitchTransition>
          <CSSTransition
            key={words[paragraphCounter]}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
            classNames="fade"
          >
            <p
              style={{
                width: "350px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <b> {`${words[paragraphCounter]}`}</b>{" "}
            </p>
          </CSSTransition>
        </SwitchTransition>
        a nuestro Whatsapp
        <Button>
          <FontAwesomeIcon
            title="Whatsapp"
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
