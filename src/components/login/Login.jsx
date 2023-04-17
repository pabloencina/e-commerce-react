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
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = ({ darkMode }) => {
  const {
    buttonVerDetalle,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
  } = useHoverButtons(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Debe agregar un email válido")
        .max(40)
        .min(10)
        .required("El campo Email es requerido"),
      password: Yup.string().required("Password es requerido"),
    }),
  });

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
                variant="h5"
                style={{
                  fontFamily: "Montserrat",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                INICIAR SESIÓN
              </Typography>
            </Box>
            <TextField
              style={{
                backgroundColor: darkMode ? "white" : "#564592",
                color: darkMode ? "black" : "white",
              }}
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              style={{
                backgroundColor: darkMode ? "white" : "#564592",
                color: darkMode ? "black" : "white",
              }}
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box
              sx={{ py: 2 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                size="large"
                type="submit"
                variant="contained"
                style={buttonVerDetalle}
                onMouseEnter={handleMouseEnterVerDetalle}
                onMouseLeave={handleMouseLeaveVerDetalle}
              >
                INICIAR SESIÓN
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
      <Divider />
      <Box m={2} style={{ display: "flex", justifyContent: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "300px",
              height: "45px",
              fontFamily: "Montserrat",
              backgroundColor: "#564592",
              color: "white",
            }}
          >
            <ReplyOutlinedIcon />
            Volver
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
