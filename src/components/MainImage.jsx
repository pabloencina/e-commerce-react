import { Box } from "@mui/material";
import React from "react";

import mainImage from "../components/images/main-image.jpg";

const MainImage = () => {
  return (
    <Box m={3}>
      <img src={mainImage} alt="main imagen" width={"100%"} height={500} />
    </Box>
  );
};

export default MainImage;
