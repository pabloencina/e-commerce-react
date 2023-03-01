import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Button } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import * as React from "react";
import { useRef } from "react";
import "../../cssStyles/btnSearch.css";
import dataArray from "../ejemplo";

export default function SearchAutocomplete({ darkMode }) {
  const options = dataArray.map((option) => option.name);

  const textFieldRef = useRef(null);

  const onSearch = () => {
    console.log(textFieldRef.current.children[1].children[0].value);
    console.log();
  };

  const onKeyDown = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      onSearch();
    }
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
        sx={{
          width: 400,
          display: "flex",
          backgroundColor: "white",
          //border: "2px solid #564592",
          //borderRadius: "10% 10% 10% 10%",
        }}
        freeSolo
        id="search-autocomplete"
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            ref={textFieldRef}
            onKeyDown={onKeyDown}
            label="Buscar"
          />
        )}
      />
      <Button className="btnSearch" onClick={onSearch}>
        <SearchOutlinedIcon />
      </Button>
    </Box>
  );
}

//es un after mio que grabe y lo subi a YT:https://youtu.be/akqCQS96oQw
