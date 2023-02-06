import { Box, Button, Grid } from "@mui/material";
import React from "react";
import appStore from "../components/images/app_store.png";
import googlePlay from "../components/images/google_play.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import logo from "../components/images/logo-color.svg";

const Footer = () => {
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
          <Button>
            <FacebookOutlinedIcon
              style={{ color: " #EDF67D " }}
            ></FacebookOutlinedIcon>
          </Button>
        </Grid>
        <Grid item xs>
          <Button>
            <YouTubeIcon style={{ color: " #EDF67D " }}></YouTubeIcon>
          </Button>
        </Grid>
        <Grid item xs>
          <Button>
            <InstagramIcon style={{ color: " #EDF67D " }}></InstagramIcon>
          </Button>
        </Grid>
        <Grid item xs>
          <Button>
            <TwitterIcon style={{ color: " #EDF67D " }}></TwitterIcon>
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
                fontFamily: "OooH baby",
                fontSize: "20px",
                color: "white",
              }}
            >
              Abrazar el presente 2023
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
