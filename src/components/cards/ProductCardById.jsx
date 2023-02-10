import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
//import useHoverButtons from "../hooks/useHoverButtons";
//import ItemCount from "./ItemCount";
//import useAccountant from "../hooks/useAccountant";
import ProductCardPrice from "./ProductCardPrice";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import useHoverButtons from "../hooks/useHoverButtons";

const ProductCardById = ({ product, onProductAdded }) => {
  const { name, image, description, sale, offerPrice } = product;
  const {
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
    buttonVerDetalle,
  } = useHoverButtons(false);

  return (
    <Box m={5}>
      <Box>
        <Card
          sx={{
            width: 900,
            m: 5,
            display: "flex",
            //backgroundColor: "#EDF67D",
            flexDirection: "row",
          }}
        >
          <CardMedia
            sx={{ height: 340, width: "500px" }}
            image={image}
            title="card indumentaria"
          >
            {sale ? (
              <Box
                style={{
                  marginTop: "280px",
                  marginLeft: "70%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#EDF67D",
                }}
              >
                <p>{"- " + offerPrice + " %"}</p>
                {<LoyaltyIcon style={{ color: "red" }} />}
              </Box>
            ) : (
              ""
            )}
          </CardMedia>

          <CardContent
            sx={{
              flexGrow: 1,
              //justifyContent: "center",
              display: "block",
              //alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              {description}
            </Typography>
          </CardContent>
          <Box
            m={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              {" "}
              <ProductCardPrice
                onProductAdded={onProductAdded}
                product={product}
              />
            </Box>
            <Box>
              {/* <ItemCount increase={increase} decrease={decrease} count={count} /> */}
            </Box>
          </Box>
        </Card>
      </Box>
      <Divider />
      <Box m={2} style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={buttonVerDetalle}
          onMouseEnter={handleMouseEnterVerDetalle}
          onMouseLeave={handleMouseLeaveVerDetalle}
        >
          <ReplyOutlinedIcon />
          Volver
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCardById;
