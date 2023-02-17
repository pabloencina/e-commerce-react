import { Box } from "@mui/system";
import React from "react";
import error404 from "../components/images/error404.jpg";

const Error404 = () => {
  return (
    <Box>
      <Box
        m={5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={error404}
          alt="error404"
          style={{ width: "70%", height: "500px" }}
        ></img>
      </Box>
      <Box
        m={5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#724cf9",
          height: "200px",
        }}
      >
        <p
          style={{
            color: "white",
            fontFamily: "oooh baby",
            fontSize: "36px",
          }}
        >
          No encontramos la página que estás buscando. Disculpá las molestias.
        </p>
      </Box>
    </Box>
  );
};

export default Error404;
