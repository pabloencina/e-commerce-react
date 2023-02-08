import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import LoyaltyIcon from "@mui/icons-material/Loyalty";

// https://unsplash.com/es/t/food-drink
// https://www.freepik.es/search?format=search&query=comida&type=photo
// https://storyset.com/food
//https://www.youtube.com/watch?v=s_Txhh-clVk&t=999s
export default function ProductCard({ product, onProductAdded }) {
  const { name, image, description, sale, offerPrice } = product;

  const [isHover, setIsHover] = React.useState(false);

  const buttonStyle = {
    backgroundColor: isHover ? "white" : "#564592",
    color: isHover ? "#564592" : "white",
    //textDecoration: "line-through",
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <>
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
          >
            {sale ? (
              <Box
                style={{
                  marginTop: "110px",
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
              style={buttonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Ver Detalle
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
}
