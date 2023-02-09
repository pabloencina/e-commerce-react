import { Box, Button, Container, TextField, Typography } from "@mui/material";
import useHoverButtons from "../hooks/useHoverButtons";

const Login = () => {
  const {
    buttonVerDetalle,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
  } = useHoverButtons(false);

  return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ my: 3 }}>
          <Typography
            color="textPrimary"
            variant="h3"
            style={{ fontFamily: " Hind Madurai" }}
          >
            Tienda online
          </Typography>
        </Box>
        <form>
          <Box sx={{ my: 3 }}>
            <Typography
              color="textPrimary"
              variant="h5"
              style={{ fontFamily: " Hind Madurai" }}
            >
              Iniciar sesión
            </Typography>
          </Box>
          <TextField
            // error={Boolean(formik.touched.email && formik.errors.email)}
            fullWidth
            // helperText={formik.touched.email && formik.errors.email}
            label="Email Address"
            margin="normal"
            name="email"
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
            label="Password"
            margin="normal"
            name="password"
            // onBlur={formik.handleBlur}
            // onChange={formik.handleChange}
            type="password"
            // value={formik.values.password}
            variant="outlined"
          />
          <Box sx={{ py: 2 }}>
            <Button
              //color="primary"
              //disabled={formik.isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              style={buttonVerDetalle}
              onMouseEnter={handleMouseEnterVerDetalle}
              onMouseLeave={handleMouseLeaveVerDetalle}
            >
              Login
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

export default Login;
