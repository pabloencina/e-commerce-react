import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import dataArray from "../ejemplo";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import "../../cssStyles/btnSearch.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
// import ProductCardById from "../cards/ProductCardById";
// import { Grid } from "@mui/material";
//import ProductCardByIdItem from "../cards/ProductCardByIdItem";

//import ProductCardByIdItem from "../cards/ProductCardByIdItem";
//import { useState } from "react";

export default function SearchAutocomplete() {
  //const { name } = product;

  const [query, setQuery] = useState({ dataArray: "" });
  //const [value, setValue] = useState([]);

  const onInputChange = (e) => {
    setQuery(e.target.value);
    console.log(e);
  };

  const onInputClick = (e) => {
    // setQuery(e.target.value);
    console.log(e);
  };

  const onSearch = () => {
    console.log(query);
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
        onInputChange={onInputChange}
        onChange={onInputClick}
        sx={{
          width: 400,
          display: "flex",
          //backgroundColor: "#EDF67D",
          //border: "2px solid #564592",
          //borderRadius: "10% 10% 10% 10%",
        }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={dataArray.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      {/* <Autocomplete
        freeSolo
        disablePortal
        openOnFocus
        id="combo-box-demo"
        options={dataArray.map((array) => array.name)}
        // return <li value={array.name}>{array.name}</li>;
        // })}
        sx={{
          width: 400,
          display: "flex",
          //backgroundColor: "#EDF67D",
          //border: "2px solid #564592",
          //borderRadius: "10% 10% 10% 10%",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Búsqueda"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
        //blurOnSelect="touch"
        onInputChange={onInputChange}
        onChange={onInputClick}
      /> */}
      <Button className="btnSearch" onClick={onSearch}>
        <SearchOutlinedIcon />
      </Button>
    </Box>
  );
}

//es un after mio que grabe y lo subi a YT:https://youtu.be/akqCQS96oQw
