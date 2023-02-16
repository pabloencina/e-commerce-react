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
import { Link } from "react-router-dom";

const ProductCardById = ({ product, onProductAdded }) => {
  const { name, image, description, sale, offerPrice } = product;
  const {
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
    buttonVerDetalle,
  } = useHoverButtons(false);

  return (
    <Box>
      <Box m={5}>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: "70%",
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
                    fontFamily: " Hind Madurai",
                  }}
                >
                  <p>{"- " + offerPrice + " %"}</p>
                  {<LoyaltyIcon style={{ color: "red" }} />}
                </Box>
              ) : (
                ""
              )}
            </CardMedia>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  justifyContent: "center",
                  display: "block",
                  alignItems: "center",
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
                    fontFamily: " Hind Madurai",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  //variant="body2"
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: " Hind Madurai",
                  }}
                >
                  {description}
                </Typography>
              </CardContent>
            </Box>

            <Box
              m={5}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "150px",
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
          <Link to={"/products"} style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: "300px",
                height: "45px",

                backgroundColor: "#564592",
              }}
              style={buttonVerDetalle}
              onMouseEnter={handleMouseEnterVerDetalle}
              onMouseLeave={handleMouseLeaveVerDetalle}
            >
              <ReplyOutlinedIcon />
              <p style={{ fontFamily: " Hind Madurai" }}>Volver</p>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCardById;
