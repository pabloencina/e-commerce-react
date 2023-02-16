import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
//import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import MenuComponent from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import logo from "../images/logo-color.svg";
//import CartWidget from "../navbar/CartWidget";
import useHoverButtons from "../hooks/useHoverButtons";
import { Link, NavLink } from "react-router-dom";
import ModalCartWidget from "./ModalCartWidget";

const pages = ["NOSOTROS", "MATS", "ELEMENTOS YOGA", "ELEMENTOS MEDITACION"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const objectPages = Object.assign({}, pages);
console.log(objectPages[0]);

function NavBar({ count }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { isHover, handleMouseEnter, handleMouseLeave, buttonLogo } =
    useHoverButtons(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const styles = {
    imagenLogo: {
      width: "100px",
      backgroundColor: isHover ? "#EDF67D" : "#564592",
    },
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#564592",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            to="/"
            style={buttonLogo}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={logo}
              alt="logo"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              style={styles.imagenLogo}
            />
          </Link>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: " Hind Madurai",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <MenuComponent
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavLink
                  to={"/nosotros"}
                  style={{
                    my: 2,
                    color: "#564592",
                    display: "block",
                    fontFamily: " Hind Madurai",
                    marginLeft: "20Px",
                    textDecoration: "none",
                    //backgroundColor: "#564592",
                  }}
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" fontFamily=" Hind Madurai">
                      {page}
                    </Typography>
                  </MenuItem>
                </NavLink>
              ))}
            </MenuComponent>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                to={"/nosotros"}
                key={page}
                onClick={handleCloseNavMenu}
                style={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: " Hind Madurai",
                  marginLeft: "20Px",
                  textDecoration: "none",
                  backgroundColor: "#564592",
                }}
              >
                {page}
              </NavLink>
            ))}
          </Box>

          {/* <CartWidget count={count} /> */}
          <ModalCartWidget count={count} />
          <Box sx={{ flexGrow: 0 }}>
            <Button
              style={{
                backgroundColor: "#564592",
                marginLeft: "10Px",
                fontFamily: " Hind Madurai",
              }}
              variant="contained"
            >
              <NavLink
                to={"/register"}
                style={{
                  backgroundColor: "#564592",
                  color: "white",
                  marginLeft: "10Px",
                  fontFamily: " Hind Madurai",
                  textDecoration: "none",
                }}
              >
                Registrarse
              </NavLink>
            </Button>
            <Button
              style={{
                backgroundColor: "#564592",
                marginLeft: "10Px",
                fontFamily: " Hind Madurai",
              }}
              variant="contained"
              //onClick={}
            >
              <Link
                to={"/login"}
                style={{
                  backgroundColor: "#564592",
                  color: "white",
                  marginLeft: "10Px",
                  fontFamily: " Hind Madurai",
                  textDecoration: "none",
                }}
              >
                Iniciar sesión
              </Link>
            </Button>

            <MenuComponent
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </MenuComponent>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
