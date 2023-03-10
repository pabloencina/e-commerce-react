import {
  Box,
  Button,
  //Card,
  // CardContent,
  // CardHeader,
  Container,
  Divider,
  //DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
//import Autocomplete from "@mui/material/Autocomplete";
import React from "react";
import useHoverButtons from "../hooks/useHoverButtons";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

const Register = ({ darkMode }) => {
  const {
    buttonVerDetalle,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
  } = useHoverButtons(false);

  return (
    <Box>
      <Box
        m={6}
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          <form>
            <Box sx={{ my: 3 }}>
              <Typography
                sx={{ color: darkMode ? "#564592" : "white" }}
                color="#564592"
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                REGISTRO
              </Typography>
            </Box>
            <TextField
              style={{
                backgroundColor: darkMode ? "white" : "#564592",
                color: darkMode ? "black" : "white",
              }}
              // error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              // helperText={formik.touched.email && formik.errors.email}
              label="Name"
              margin="normal"
              name="name"
              required
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}
              type="email"
              // value={formik.values.email}
              variant="outlined"
            />
            <TextField
              style={{
                backgroundColor: darkMode ? "white" : "#564592",
                color: darkMode ? "black" : "white",
              }}
              // error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              // helperText={formik.touched.password && formik.errors.password}
              label="Surname"
              name="surname"
              margin="normal"
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}

              // value={formik.values.password}
              variant="outlined"
            />
            <TextField
              style={{
                backgroundColor: darkMode ? "white" : "#564592",
                color: darkMode ? "black" : "white",
              }}
              // error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              // helperText={formik.touched.password && formik.errors.password}
              label="Email"
              name="email"
              type="email"
              margin="normal"
              // onBlur={formik.handleBlur}
              // onChange={formik.handleChange}

              // value={formik.values.password}
              variant="outlined"
            />

            <Box
              sx={{ py: 2 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                //color="primary"
                //disabled={formik.isSubmitting}
                //fullWidth
                size="large"
                type="submit"
                variant="contained"
                style={buttonVerDetalle}
                onMouseEnter={handleMouseEnterVerDetalle}
                onMouseLeave={handleMouseLeaveVerDetalle}
              >
                REGISTRARSE
              </Button>
            </Box>
            {/* {state.formError ? (
          <Alert severity="error">{state.errorMessage}</Alert>
        ) : null} */}
          </form>
        </Container>
      </Box>
      <Divider />
      <Box m={2} style={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            width: "300px",
            height: "45px",
            backgroundColor: "#564592",
            color: "white",
            fontFamily: "Montserrat",
          }}
        >
          <ReplyOutlinedIcon />
          Volver
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
