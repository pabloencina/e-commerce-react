import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import dataArray from "../ejemplo";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import "../../css/btnSearch.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
//import { useNavigate } from "react-router-dom";
// import ProductCardById from "../cards/ProductCardById";
// import { Grid } from "@mui/material";
//import ProductCardByIdItem from "../cards/ProductCardByIdItem";

//import ProductCardByIdItem from "../cards/ProductCardByIdItem";
//import { useState } from "react";

export default function SearchAutocomplete() {
  //const { name } = product;

  const onChangeNameProduct = (e) => {
    //console.log(name);
  };
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80px",
      }}
    >
      <Autocomplete
        disablePortal
        openOnFocus
        id="combo-box-demo"
        options={dataArray.map((array) => array.name)}
        sx={{
          width: 400,
          display: "flex",
          //backgroundColor: "#EDF67D",
          //border: "2px solid #564592",
          //borderRadius: "10% 10% 10% 10%",
        }}
        renderInput={(params) => <TextField {...params} label="Búsqueda" />}
        blurOnSelect="touch"
        onChange={onChangeNameProduct}
      />
      <Button className="btnSearch">
        <SearchOutlinedIcon />
      </Button>
    </Box>
  );
}
