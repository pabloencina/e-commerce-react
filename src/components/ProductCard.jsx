import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "./ItemCount";
import AddToCart from "./AddToCart";
import imageCard1 from "../components/images/card-image.jpg";
import { Grid } from "@mui/material";
import useAccountant from "./useAccountant";
//import useAccountant from "./components/useAccountant";
// https://unsplash.com/es/t/food-drink
// https://www.freepik.es/search?format=search&query=comida&type=photo
// https://storyset.com/food
//https://www.youtube.com/watch?v=s_Txhh-clVk&t=999s
export default function ProductCard({ onProductAdded }) {
  const { increase, decrease, count } = useAccountant(1);

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
            image={imageCard1}
            title="green iguana"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ justifyContent: "center", display: "flex" }}
            >
              Spaghetti veganos
            </Typography>
            <Typography
              variant="body2"
              //color="text.secondary"
              sx={{ justifyContent: "center", display: "flex" }}
            >
              Fideos veganos con salsa a elección
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center", display: "flex" }}>
            <ItemCount
              increase={() => {
                increase();
              }}
              decrease={() => {
                decrease();
              }}
              count={count}
              stock={15}
            />
            <AddToCart count={count} onProductAdded={onProductAdded} />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
