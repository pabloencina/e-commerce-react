import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../components/images/logo-color.svg";
import yogaPlaya from "../components/images/yoga-en-la-playa.jpg";
import yogaRio from "../components/images/yoga-en-el-rio.jpg";

const Nosotros = ({ darkMode }) => {
  return (
    <Box
      m={3}
      style={{
        backgroundColor: darkMode ? "#EDF67D" : "#564592",
        height: "1800px",
      }}
    >
      <Box
        m={5}
        style={{
          backgroundColor: "#564592",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        <h1 style={{ fontFamily: "OooH baby", color: "white" }}>
          Abrazar el presente, Tienda online
        </h1>
      </Box>
      <Box
        m={3}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid>
          <img src={logo} alt="logo" />
        </Grid>
        <Box
          m={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Grid m={3}>
            <h1
              style={{
                marginLeft: "40%",
                color: darkMode ? "black" : "white",
                fontFamily: "Montserrat",
              }}
            >
              Misión y Visión
            </h1>
            <p
              style={{
                marginTop: "5%",
                color: darkMode ? "black" : "white",
                letterSpacing: "1px",
                textAlign: "center",
                lineHeight: "30px",
                fontSize: "16px",
                fontWeight: "300",
                fontFamily: "'Montserrat', sans-serif",
                width: "80%",
                marginLeft: "10%",
              }}
            >
              'Abrazar el presente Tienda Online' es una tienda de productos de
              yoga, meditación integrado con clases personalizadas, coaching
              nutricional, nuestros productos son de una calidad única
              trabajadas con telas veganas sin contaminación ambiental.Nuestro
              misión es Lograr una transformación de las personas para crear más
              conciencia de lo que necesita su cuerpo. Ayudándolas a conectar
              desde su interior hacia su alimentación. Integrar coaching con
              alimentación consciente, yoga. Proporcionar la responsabilidad a
              cada persona a tomar las riendas de su salud y confiar en el
              potencial que tiene para lograrlo. Expandir el servicio a más
              personas.
            </p>
          </Grid>
        </Box>
      </Box>
      <Box
        m={3}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
          height: "400px",
          //backgroundColor: "red",
        }}
      >
        <Grid
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "Montserrat",
              color: darkMode ? "black" : "white",
            }}
          >
            Valores
          </h1>
          <Box
            m={1}
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "300",
              color: darkMode ? "black" : "white",
            }}
          >
            <ul>Responsabilidad.</ul>
            <ul>Conectarse con el cliente cien por ciento.</ul>
            <ul>Escucha activa.</ul>
            <ul>Empatía.</ul>
          </Box>
        </Grid>
        <Grid style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={yogaPlaya}
            alt="Yoga en la playa"
            style={{ width: "90%" }}
          />
        </Grid>
      </Box>

      <Box
        m={3}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
          height: "500px",
          //backgroundColor: "red",
        }}
      >
        <Grid m={3} style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={yogaRio}
            alt="Yoga en la laguna"
            //style={{ width: "90%" }}
          />
        </Grid>
        <Box
          m={3}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid m={3} style={{ height: "600px" }}>
            <h1
              style={{
                color: darkMode ? "black" : "white",
                fontFamily: "Montserrat",
                textAlign: "center",
              }}
            >
              ¿Que viene a resolver en la sociedad este emprendimiento?
            </h1>
            <p
              style={{
                color: darkMode ? "black" : "white",
                marginTop: "5%",
                letterSpacing: "1px",
                textAlign: "center",
                lineHeight: "30px",
                fontSize: "16px",
                fontWeight: "300",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              “ Abrazar el presente ” nace de la necesidad de un aporte a la
              comunidad para que las personas tomen conciencia de su
              alimentación, la falta de conocimiento que se tiene con los
              alimentos que se consume habitualmente y la aceleración rutinaria,
              las personas dejan de lado uno de los aspectos fundamentales de la
              vida que es el alimento que ingresa en nuestro interior
              nutriéndonos o desencadenando muchos problemas a nivel físico y
              emocional.
            </p>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Nosotros;
