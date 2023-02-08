import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

// https://unsplash.com/es/t/food-drink
// https://www.freepik.es/search?format=search&query=comida&type=photo
// https://storyset.com/food
//https://www.youtube.com/watch?v=s_Txhh-clVk&t=999s
export default function ProductCard({ product, onProductAdded }) {
  const { name, image, description, sale, offerPrice } = product;

  return (
    <Box>
      <Card
        sx={{
          maxWidth: 345,
          m: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title="card indumentaria"
        />
        {sale ? (
          <Box
            style={{
              marginTop: "10px",
              marginLeft: "70%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#EDF67D",
            }}
          >
            <p>{sale ? "- " + offerPrice + " %" : ""}</p>
            {sale ? <LoyaltyIcon style={{ color: "red" }} /> : ""}
          </Box>
        ) : (
          ""
        )}

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ justifyContent: "center", display: "flex" }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ justifyContent: "center", display: "flex" }}
          >
            {description}
          </Typography>
        </CardContent>
        <Box m={4} style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={{
              width: "50%",
              backgroundColor: "#564592",
              color: "white",
            }}
          >
            Ver Detalle
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
