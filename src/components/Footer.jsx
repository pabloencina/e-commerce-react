import { Box, Button, Grid } from "@mui/material";
import React from "react";
import appStore from "../components/images/app_store.png";
import googlePlay from "../components/images/google_play.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../components/images/logo.jpeg";

const Footer = () => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{
        height: "200px",
        variant: "contained",
        backgroundColor: "",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs>
          <Button>
            <FacebookOutlinedIcon></FacebookOutlinedIcon>
          </Button>
        </Grid>
        <Grid item xs>
          <Button>
            <YouTubeIcon></YouTubeIcon>
          </Button>
        </Grid>
        <Grid item xs>
          <Button>
            <InstagramIcon></InstagramIcon>
          </Button>
        </Grid>
        <Grid item xs>
          <Button>
            <TwitterIcon></TwitterIcon>
          </Button>
        </Grid>
        <Grid item xs>
          <Button>
            <img
              style={{ width: "150px" }}
              src={googlePlay}
              alt="google play"
            />
          </Button>
        </Grid>
        <Grid item xs>
          <Button>
            <img style={{ width: "150px" }} src={appStore} alt="app sore" />
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
          <Grid>
            <img
              src={logo}
              alt="logo"
              style={{ height: "20px", marginRight: "10px" }}
            />
          </Grid>
          <Grid>Natural Food 2023</Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
