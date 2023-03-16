import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
//import useHoverButtons from "../hooks/useHoverButtons";
//import ItemCount from "./ItemCount";
//import useAccountant from "../hooks/useAccountant";
import ProductCardPrice from "./ProductCardPrice";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import useHoverButtons from "../hooks/useHoverButtons";
import { Link } from "react-router-dom";
import { CardContext } from "../../context/CardContext";

const ProductCardById = ({ product, onProductAdded, darkMode }) => {
  // const { setProducts } = useContext(CardContext);

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
              backgroundColor: darkMode ? "white" : "#301E67",
              flexDirection: "row",
              boxSizing: "border-box",
            }}
          >
            <CardMedia
              sx={{ height: "450px", width: "100%", boxSizing: "border-box" }}
              image={product.image}
              title="card indumentaria"
            >
              {product.sale ? (
                <Box
                  style={{
                    marginTop: "400px",
                    marginLeft: "70%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: darkMode ? "#EDF67D" : "white",
                    fontFamily: "Montserrat",
                  }}
                >
                  <p>{"- " + product.offerPrice + " %"}</p>
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
                    fontFamily: "Montserrat",
                    color: darkMode ? "#724cf9" : "white",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Montserrat",
                    color: darkMode ? "black" : "white",
                  }}
                >
                  {product.description}
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
                  darkMode={darkMode}
                />
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
              <p style={{ fontFamily: "Montserrat" }}>Volver</p>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCardById;
