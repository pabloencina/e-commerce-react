import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

const FormCheckout = ({ darkMode }) => {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      dirección: "",
      teléfono: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("El campo Nombre es requerido"),

      email: Yup.string()
        .email("Debe agregar un email válido")
        .max(40)
        .min(10)
        .required("El campo Email es requerido"),
      phone: Yup.string().required("Teléfono es requerido"),
      address: Yup.mixed()
        //.oneOf(options, "Address must be one of the options")
        .required("El campo Dirección es requerida"),
      city: Yup.string().required("El campo Ciudad es requerida"),
    }),
  });
  return (
    <Container>
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
          fullWidth
          label="Nombre"
          margin="normal"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          value={formik.values.name}
          variant="outlined"
          error={Boolean(formik.touched.name && formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          style={{
            backgroundColor: darkMode ? "white" : "#564592",
            color: darkMode ? "black" : "white",
          }}
          fullWidth
          label="Email"
          name="email"
          type="email"
          margin="normal"
          variant="outlined"
          required
          error={Boolean(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <TextField
          style={{
            backgroundColor: darkMode ? "white" : "#564592",
            color: darkMode ? "black" : "white",
          }}
          fullWidth
          label="Dirección"
          name="address"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          value={formik.values.address}
          variant="outlined"
          error={Boolean(formik.touched.address && formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <TextField
          style={{
            backgroundColor: darkMode ? "white" : "#564592",
            color: darkMode ? "black" : "white",
          }}
          fullWidth
          label="Teléfono"
          name="phone"
          margin="normal"
          variant="outlined"
          required
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          error={Boolean(formik.touched.phone && formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />

        <Box
          sx={{ py: 2 }}
          style={{ display: "flex", justifyContent: "center" }}
        ></Box>
      </form>
    </Container>
  );
};

export default FormCheckout;
