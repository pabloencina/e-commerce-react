import { Box, Button, Grid } from "@mui/material";
import React from "react";
import appStore from "../components/images/app_store.png";
import googlePlay from "../components/images/google_play.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../components/images/logo-color.svg";
import { useState } from "react";

const Footer = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        height: "200px",
        variant: "contained",
        backgroundColor: "#564592 ",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3} style={{ marginTop: "10px" }}>
        <Grid item xs>
          <Button
            title="Facebook"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FacebookOutlinedIcon
              style={{ color: isHover ? "#724cf9" : "white" }}
            ></FacebookOutlinedIcon>
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            title="You Tube"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <YouTubeIcon
              style={{ color: isHover ? "#724cf9" : "white" }}
            ></YouTubeIcon>
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            title="Instagram"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <InstagramIcon
              style={{ color: isHover ? "#724cf9" : "white" }}
            ></InstagramIcon>
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            title="Twitter"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <TwitterIcon
              style={{ color: isHover ? "#724cf9" : "white" }}
            ></TwitterIcon>
          </Button>
        </Grid>
        <Grid item xs>
          <Button>
            <img
              title="Google Play"
              style={{ width: "150px" }}
              src={googlePlay}
              alt="google play"
            />
          </Button>
        </Grid>
        <Grid item xs>
          <Button>
            <img
              title="App Store"
              style={{ width: "150px" }}
              src={appStore}
              alt="app store"
            />
          </Button>
        </Grid>
        <Grid
          height={100}
          container
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            mr: 5,
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid>
              <img src={logo} alt="logo" style={{ height: "80px" }} />
            </Grid>
            <Grid
              style={{
                fontFamily: "Roboto",
                fontWeight: "200",
                fontSize: "20px",
                color: "white",
                marginRight: "100px",
              }}
            >
              Abrazar el presente 2023
            </Grid>
            <Grid
              style={{
                fontFamily: "Roboto",
                fontWeight: "200",
                fontSize: "20px",
                color: "white",
              }}
            >
              Copyright ©
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
