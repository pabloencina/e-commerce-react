import {
  Box,
  Button,
  //Card,
  // CardContent,
  // CardHeader,
  Container,
  //DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
//import Autocomplete from "@mui/material/Autocomplete";
import React from "react";
import useHoverButtons from "../hooks/useHoverButtons";

const Register = () => {
  const {
    buttonVerDetalle,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
  } = useHoverButtons(false);
  return (
    <Box
      m={6}
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
        justifyContent: "center",
        backgroundColor: "#EDF67D",
      }}
    >
      <Container maxWidth="sm">
        {/* <Box sx={{ my: 3 }}>
          <Typography
            color="textPrimary"
            variant="h3"
            style={{
              fontFamily: " Hind Madurai",
              display: "flex",
              justifyContent: "center",
            }}
          >
            TIENDA ONLINE
          </Typography>
        </Box> */}
        <form>
          <Box sx={{ my: 3 }}>
            <Typography
              color="#564592"
              variant="h5"
              style={{
                fontFamily: " Hind Madurai",
                display: "flex",
                justifyContent: "center",
              }}
            >
              REGISTRO
            </Typography>
          </Box>
          <TextField
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
  );
};

export default Register;
