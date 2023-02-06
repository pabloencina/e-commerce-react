import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import cardIndumentaria from "../components/images/card-indumentaria.jpg";
import { Button, Grid } from "@mui/material";
import ProductCardPrice from "./ProductCardPrice";
import { Box } from "@mui/system";

//import useAccountant from "./components/useAccountant";
// https://unsplash.com/es/t/food-drink
// https://www.freepik.es/search?format=search&query=comida&type=photo
// https://storyset.com/food
//https://www.youtube.com/watch?v=s_Txhh-clVk&t=999s
export default function ProductCard({ onProductAdded }) {
  return (
    <Grid container spacing={4}>
      {/* //aca va el map.................................................. */}
      <Grid item xs={12} sm={6} md={4}>
        <Card
          sx={{
            maxWidth: 345,
            ml: 5,
            mr: 5,
            mt: 5,
            mb: 5,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={cardIndumentaria}
            title="card indumentaria"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ justifyContent: "center", display: "flex" }}
            >
              Calza mujer
            </Typography>
            <Typography
              variant="body2"
              //color="text.secondary"
              sx={{ justifyContent: "center", display: "flex" }}
            >
              Calza larga mujer, talle M, color celeste.
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

          {/* <ProductCardPrice onProductAdded={onProductAdded} /> */}
        </Card>
      </Grid>
    </Grid>
  );
}
