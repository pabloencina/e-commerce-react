import { TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const CompletedPurchaseForm = ({ darkMode }) => {
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

    // onSubmit: async (values) => {
    //   try {
    //     // const response = await editCompany(id, values);
    //     // setState({
    //     //     ...state,
    //     //     dialogOpen: true,
    //     //     formError: false,
    //     // });
    //     //return response;
    //   } catch (error) {
    //     let message = "Company creation failed.";
    //     if (error.response) {
    //       if (error.response.status === 400) {
    //         message += " Please verify the fields in the form.";
    //       } else if (error.response.status === 409) {
    //         message += " The email already exists in the database.";
    //       } else if (error.response.status === 500) {
    //         message +=
    //           " There's issues in the server. Please try again later...";
    //       }
    //     } else {
    //       message +=
    //         " Can't connect with the server. Please try again later...";
    //     }
    //     // console.log(error.response);
    //     // setState({
    //     //     ...state,
    //     //     errorMessage: message,
    //     //     formError: true,
    //     // });
    //   }
    // },
  });
  return (
    <Box>
      <Box>
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
      </Box>
      <Box></Box>
    </Box>
  );
};

export default CompletedPurchaseForm;
