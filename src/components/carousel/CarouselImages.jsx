import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import images from "../helper/images";
import { Box } from "@mui/system";

function CarouselImages({ darkMode }) {
  return (
    <Box m={3}>
      <Carousel>
        {images.map((item) => (
          <Item key={item.id} item={item} darkMode={darkMode} />
        ))}
      </Carousel>
    </Box>
  );
}

export default CarouselImages;
