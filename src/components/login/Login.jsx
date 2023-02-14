import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import useHoverButtons from "../hooks/useHoverButtons";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

const Login = () => {
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
          //backgroundColor: "#EDF67D",
          justifyContent: "center",
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
                INICIAR SESIÓN
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
                iNICIAR SESIÓN
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
            fontFamily: " Hind Madurai",
            backgroundColor: "#564592",
            color: "white",
          }}
        >
          <ReplyOutlinedIcon />
          Volver
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
