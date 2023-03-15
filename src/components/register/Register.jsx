import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useHoverButtons from "../hooks/useHoverButtons";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = ({ darkMode }) => {
  const {
    buttonVerDetalle,
    handleMouseEnterVerDetalle,
    handleMouseLeaveVerDetalle,
  } = useHoverButtons(false);

  const StyledErrorMessage = {
    color: darkMode ? "yellow" : "blue",
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Debe agregar un email válido")
        .max(40)
        .min(10)
        .required("El campo Email es requerido"),
      name: Yup.string().required("El campo nombre es requerido"),
      surname: Yup.string().required("El campo apellido es requerido"),
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
                StyledErrorMessage,
              }}
              error={Boolean(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label="Name"
              margin="normal"
              name="name"
              required
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.name}
              variant="outlined"
            />
            <TextField
              style={{
                backgroundColor: darkMode ? "white" : "#564592",
                color: darkMode ? "black" : "white",
              }}
              error={Boolean(formik.touched.surname && formik.errors.surname)}
              fullWidth
              helperText={formik.touched.surname && formik.errors.surname}
              label="Surname"
              name="surname"
              margin="normal"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.surname}
              variant="outlined"
            />
            <TextField
              style={{
                backgroundColor: darkMode ? "white" : "#564592",
                color: darkMode ? "black" : "white",
              }}
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              margin="normal"
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
                REGISTRARSE
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
              backgroundColor: "#564592",
              color: "white",
              fontFamily: "Montserrat",
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

export default Register;
