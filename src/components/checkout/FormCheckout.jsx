import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import BtnGeneratePurchase from "./BtnGeneratePurchase";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import { useNavigate } from "react-router-dom";
//import Spinner from "../Spinner";

const FormCheckout = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [orderId, setOrderId] = useState("");

  const { getCartDetailToSave } = useContext(CardContext);

  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(true);

  const generateOrder = async () => {
    const buyer = { name: name, email: email, phone: phone, address: address };
    const date = new Date();
    console.log(getCartDetailToSave());
    const order = {
      buyer: buyer,
      dateComplete: date,
      cartDetails: getCartDetailToSave(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "Orders");
    const result = await addDoc(ordersCollection, order);

    setOrderId(result.id);

    // setIsLoading(false);

    return navigate(`/successful-purchase/${result.id}`);
  };

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
      address: Yup.mixed().required("El campo Dirección es requerida"),
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
            REGISTRO DE COMPRA
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
          onInput={(e) => {
            setName(e.target.value);
          }}
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
          onInput={(e) => {
            setEmail(e.target.value);
          }}
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
          onInput={(e) => {
            setAddress(e.target.value);
          }}
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
          onInput={(e) => {
            setPhone(e.target.value);
          }}
        />

        <Box
          sx={{ py: 2 }}
          style={{ display: "flex", justifyContent: "center" }}
        ></Box>
      </form>
      <BtnGeneratePurchase generateOrder={generateOrder} orderId={orderId} />
    </Container>
  );
};

export default FormCheckout;
