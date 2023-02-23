import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import useHoverButtons from "../hooks/useHoverButtons";
import { useNavigate } from "react-router-dom";

// https://unsplash.com/es/t/food-drink
// https://www.freepik.es/search?format=search&query=comida&type=photo
// https://storyset.com/food
//https://www.youtube.com/watch?v=s_Txhh-clVk&t=999s
export default function ItemList({ product }) {
  const { name, image, description, sale, offerPrice } = product;

  const navigate = useNavigate();

  const {
    buttonVerDetalle,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
  } = useHoverButtons(false);

  const handleOnClick = (e) => {
    const url = "/product/" + product.id;
    navigate(url);
  };

  return (
    <Grid container spacing={3}>
      <Box sx={{ boxSizing: "border-box", width: "100%", height: "100%" }}>
        <Card
          sx={{
            maxWidth: 500,
            m: 3,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            // width: "100",
            height: "100%",
          }}
        >
          <CardMedia
            sx={{ height: 400, boxSizing: "border-box", width: "100%" }}
            image={image}
            title="card indumentaria"
          >
            {sale ? (
              <Box
                style={{
                  marginTop: "350px",
                  marginLeft: "70%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#EDF67D",
                  //boxSizing: "border-box",
                  // width: "100%",
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
            sx={{ flexGrow: 1, boxSizing: "border-box", width: "100%" }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                justifyContent: "center",
                display: "flex",
                fontFamily: "montserrat",
                color: "#724cf9",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                justifyContent: "center",
                alignItems: "center",

                display: "flex",
                fontFamily: "montserrat",
                boxSizing: "content-box",
                width: "100%",
                height: "150px",
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
            }}
          >
            <Button
              sx={{ width: "300px", height: "45px" }}
              style={buttonVerDetalle}
              onMouseEnter={handleMouseEnterVerDetalle}
              onMouseLeave={handleMouseLeaveVerDetalle}
              onClick={handleOnClick}
            >
              <p style={{ fontFamily: "Montserrat" }}>Ver detalle</p>
            </Button>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
}
